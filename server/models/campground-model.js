const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  url: {
    type: String,
  },
  filename: {
    type: String,
  },
});

const campgroundSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [imageSchema],
});

const Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;
