import asyncHandler from "express-async-handler";
import AppError from "../utils/appError";
import Event from "../models/eventModel"
import User from "../models/userModel"

export const addParticipant = asyncHandler(async (req, res, next) => {
    const { name } = req.body;
    const event = await Event.findOne({name: name});
    if (!event) {
        return next(new AppError("Event Does Not Exist", 400));
    }

    const { id } = req.body;
    const participant = await User.findById(id);
    if (!participant) {
        return next(new AppError("Participant Does Not Exist", 400));
    }

    event.participants.push(participant);

    res.status(201).json({
        status: "success",
    });
});

export const register = asyncHandler(async (req, res, next) => {
    const { name } = req.body;
    const foundEvent = await Event.findOne({name: name});
    if (foundEvent) {
        return next(new AppError("Event Already Exists", 400));
    }

    const event = await Event.create(req.body);

    res.status(201).json({
        status: "success",
        data: event,
    });

});