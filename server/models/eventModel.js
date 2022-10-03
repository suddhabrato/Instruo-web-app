import { Schema, model } from "mongoose";
import User from "../models/userModel";

const eventSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Event Name"],
  },
  startDate: {
    type: Date,
    required: [true, "Please provide event date"],
  },
  participants: [{
    type: Schema.Types.ObjectId, 
    ref: User,
  }],
});

const Event = model("Event", eventSchema);

export default Event;