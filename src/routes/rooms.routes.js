import { Router } from "express";
import {
  createRoom,
  deleteRoom,
  editRoom,
  getRoomById,
  getRooms,
} from "../controllers/rooms.controllers.js";
import roomValidation from "../helpers/roomValidation.js";
import JWTValidation from "../helpers/jwtValidation.js";

const router = Router();

router
  .route("/rooms")
  .post([JWTValidation, roomValidation], createRoom)
  .get(getRooms);
router
  .route("/rooms/:id")
  .get(getRoomById)
  .put([JWTValidation, roomValidation], editRoom)
  .delete(deleteRoom);

export default router;
