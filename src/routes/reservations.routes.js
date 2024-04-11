import { Router } from "express";
import {
  deleteReservation,
  getReservationById,
  getReservationForARoom,
  getReservations,
  reserveRoom,
} from "../controllers/reservations.controllers.js";

const router = Router();

router.route("/reservation").post(reserveRoom).get(getReservations);
router
  .route("/reservation/:id")
  .get(getReservationById)
  .delete(deleteReservation);
router.route("/reservation/:numero").get(getReservationForARoom);

export default router;
