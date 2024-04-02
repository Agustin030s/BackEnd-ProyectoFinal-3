import { Router } from "express";
import {
  createRoom,
  deleteRoom,
  editRoom,
  getRoomById,
  getRooms,
} from "../controllers/rooms.controllers.js";
import roomValidation from "../helpers/roomValidation.js";

const router = Router();

router.route("/rooms").post([roomValidation], createRoom).get(getRooms);
router
  .route("/rooms/:id")
  .get(getRoomById)
  .put([roomValidation], editRoom)
  .delete(deleteRoom);

export default router;
