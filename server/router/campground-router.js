const express = require("express");
const campgroundController = require("../controllers/campground-controller");
const multer = require("multer");
const { storage } = require("../cloudinary/index");

const router = express.Router();
const upload = multer({ storage });

router
  .route("/")
  .get(campgroundController.getCampgrounds)
  .post(upload.array("images", 10), campgroundController.createCampground);

module.exports = router;
