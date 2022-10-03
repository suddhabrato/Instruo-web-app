import { Schema, model } from "mongoose";
import User from "../models/userModel";

const eventSchema = new Schema({
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
      type: Schema.Types.ObjectId, 
      ref: User,
    }
  ],
});

const Event = model("Event", eventSchema);

export default Event;