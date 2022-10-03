import asyncHandler from "express-async-handler";
import AppError from "../utils/appError";
import Event from "../models/eventModel"
import User from "../models/userModel"

export const addParticipant = asyncHandler(async (req, res, next) => {
    const { eventId } = req.body;
    const event = await Event.findById(eventId);
    if (!event) {
        return next(new AppError("Event Does Not Exist", 404));
    }

    const { particpantId } = req.body;
    const participant = await User.findById(particpantId);
    if (!participant) {
        return next(new AppError("Participant Does Not Exist", 404));
    }

    event.participants.push(participant);
    // add event to user

    res.status(201).json({
        status: "success",
    });
});

export const register = asyncHandler(async (req, res, next) => {
    const { title } = req.body;
    const foundEvent = await Event.findOne({title: title});
    if (foundEvent) {
        return next(new AppError("Event Already Exists", 400));
    }

    const event = await Event.create(req.body);

    res.status(201).json({
        status: "success",
        data: event,
    });

});

export const getAllEvents = asyncHandler(async (res) => {
    const events = await Event.find({});
  
    res.status(200).json({
      status: "success",
      events,
    });
});
  
export const getEventById = asyncHandler(async (req, res, next) => {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return next(new AppError("Event Does Not Exist", 404));
    }
  
    res.status(200).json({
      status: "success",
      data: {
        event,
      },
    });
});

export const updateEvent = asyncHandler(async (req, res, next) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!event) {
        return next(new AppError("Event Does Not Exist", 404));
    }

    res.status(201).json({
        status: "success",
        data: event,
    });    
});

export const deleteEvent = asyncHandler(async (req, res, next) => {
    const event = await Event.findByIdAndDelete(req.params.id);
    
    if (!event) {
      return next(new AppError("Event Does Not Exist", 404));
    }

    res.status(204).json({
    });
});