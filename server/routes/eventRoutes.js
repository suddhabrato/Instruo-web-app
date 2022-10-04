const { Router } = require("express")
const { addParticipant, deleteEvent, getAllEvents, getEventById, getEventParticpants, register, updateEvent } = require("../controllers/eventController")
const { restrictTo, protect } = require("../controllers/authController")

const router = Router();

router.get("/", getAllEvents);
router.get("/:id", getEventById);

router.use(protect);
router.post("/addParticipants", addParticipant);

router.use(restrictTo("admin"));
router.post("/register", register);
router.put("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);
router.get("/:id/participants", getEventParticpants);

module.exports = router;