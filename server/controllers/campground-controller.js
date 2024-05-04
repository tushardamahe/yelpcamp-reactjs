const Campground = require("../models/campground");

const camgrounds = async (req, res) => {
  try {
    const campgrounds = await Campground.find({});
    if (!campgrounds) {
      res.status(404).json({ msg: "No service found" });
      return;
    }
    res.status(200).json({ msg: campgrounds });
  } catch (error) {
    console.log("campgrounds", error);
  }
};

module.exports = camgrounds;
