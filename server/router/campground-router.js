const express = require("express");
const camgrounds = require("../controllers/campground-controller");

const router = express.Router();

router.route("/campgrounds").get(camgrounds);

module.exports = router;