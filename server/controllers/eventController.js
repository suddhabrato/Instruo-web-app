const asyncHandler = require( "express-async-handler")
const AppError = require( "../utils/appError")
const Event = require( "../models/eventModel")
const User = require( "../models/userModel")

exports.addParticipant = asyncHandler(async (req, res, next) => {
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

exports.register = asyncHandler(async (req, res, next) => {
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

exports.getAllEvents = asyncHandler(async (req, res, next) => {
    const events = await Event.find({});
  
    res.status(200).json({
      status: "success",
      events,
    });
});

exports.getEventById = asyncHandler(async (req, res, next) => {
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

exports.updateEvent = asyncHandler(async (req, res, next) => {
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

exports.deleteEvent = asyncHandler(async (req, res, next) => {
    const event = await Event.findByIdAndDelete(req.params.id);
    
    if (!event) {
      return next(new AppError("Event Does Not Exist", 404));
    }

    res.status(204).json({
    });
});

exports.getEventParticpants = asyncHandler(async (req, res, next) => {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return next(new AppError("Event Does Not Exist", 404));
    }

    res.status(201).json({
        status: "success",
        data: {
            participants: event.participants,
        }
    });
});