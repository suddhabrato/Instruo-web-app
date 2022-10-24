const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const Workshop = require("../models/workshopModel");

exports.createWorkshop = asyncHandler(async (req, res, next) => {
  const workshop = await Workshop.create(req.body);

  res.status(200).json({
    status: "success",
    workshop,
  });
});

exports.getAllWorkshops = asyncHandler(async (req, res, next) => {
  const workshops = await Workshop.find({});

  res.status(200).json({
    status: "success",
    workshops,
  });
});
