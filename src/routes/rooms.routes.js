import { Router } from "express";
import { createRoom, getRoomById, getRooms } from "../controllers/rooms.controllers.js";

const router = Router()

router.route("/rooms").post(createRoom).get(getRooms)
router.route("/rooms/:id").get(getRoomById)


export default router