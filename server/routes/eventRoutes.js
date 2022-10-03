import { Router } from "express";
import { addParticipant, register } from "../controllers/eventController";
import { restrictTo } from "../controllers/authController";

const router = Router();

router.use("/participant/register", addParticipant);
router.use(restrictTo("admin"));
router.post("/event/register", register);

export default router;
