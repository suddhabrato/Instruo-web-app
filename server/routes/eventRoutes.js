const express = require("express");
const eventController = require("../controllers/eventController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.restrictTo("admin"));
router.post("/event/register", eventController.register);

module.exports = router;
