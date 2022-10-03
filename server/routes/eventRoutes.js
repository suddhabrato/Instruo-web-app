import { Router } from "express";
import { addParticipant, deleteEvent, getAllEvents, getEventById, register, updateEvent } from "../controllers/eventController";
import { restrictTo, protect } from "../controllers/authController";

const router = Router();

router.get("/", getAllEvents);
router.get("/:id", getEventById);

router.use(protect);
router.post("/addParticipants", addParticipant);

router.use(restrictTo("admin"));
router.post("/register", register);
router.put("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);

export default router;
