import { Schema, model } from "mongoose";
import User from "../models/userModel";

const eventSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Event Name"],
  },
  startDate: {
    type: String,
    required: [true, "Please provide event date"],
  },
  participants: [{
    type: ObjectId, 
    ref: User,
  }],
});

const Event = model("Event", eventSchema);

export default Event;
