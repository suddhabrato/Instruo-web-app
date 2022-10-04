const mongoose = require("mongoose")
const User = require("../models/userModel")

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Event Name"],
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User",
    }
  ],
});

eventSchema.pre(/^find/, function (next) {
  this.populate({
    path: "participants",
    select: "-__v -events",
  });

  next();
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;