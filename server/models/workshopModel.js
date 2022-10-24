const mongoose = require("mongoose");
const slugify = require("slugify");

const workshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  workshopId: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: String,
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  poc: [
    {
      name: String,
      phone: String,
      email: String,
    },
  ],
  speakers: [
    {
      name: String,
      image: String,
      about: String,
      contact: {
        twitter: String,
        facebook: String,
        linkedin: String,
      },
    },
  ],
});

workshopSchema.pre("save", function (next) {
  this.workshopId = slugify(this.title, { lower: true });
  next();
});

const Workshop = mongoose.model("Workshop", workshopSchema);

module.exports = Workshop;
