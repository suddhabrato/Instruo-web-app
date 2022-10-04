const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const createSendToken = (user, statusCode, res) => {
  const token = generateToken(user._id);

  // Don't show user password in res
  user.password = undefined;

  res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(statusCode)
    .json({
      status: "success",
      data: {
        user,
      },
    });
};

exports.signup = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const foundUser = await User.findOne({ email: email });
  if (foundUser) {
    return next(new AppError("User already exist", 400));
  }

  const user = await User.create(req.body);

  createSendToken(user, 201, res);
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if user exists && password is correct
  const user = await User.findOne({ email: email }).select("+password");

  if (!user || !(await user.matchPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // Send token to client
  createSendToken(user, 200, res);
});

exports.protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(
      new AppError("You are not logged in! Please login to get access.", 401)
    );
  }

  // Verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user exists
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new AppError("Not authorised, invalid token", 401));
  }

  // Grant Access To Protected Route
  req.user = user;
  next();
});

exports.logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("access_token").status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
});

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (roles.includes(req.user.role)) return next();

    return next(
      new AppError("You don't have permission to perform this action.", 403)
    );
  };
