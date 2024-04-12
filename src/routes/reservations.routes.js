import { Router } from "express";
import {
  deleteReservation,
  getReservationById,
  getReservationForARoom,
  getReservations,
  reserveRoom,
} from "../controllers/reservations.controllers.js";
import JWTValidation from "../helpers/jwtValidation.js";
import reservationValidation from "../helpers/reservationValidation.js";

const router = Router();

router
  .route("/reservation")
  .post([JWTValidation, reservationValidation], reserveRoom)
  .get(getReservations);
router
  .route("/reservation/:id")
  .get(getReservationById)
  .delete([JWTValidation], deleteReservation);
router.route("/reservation/:numero").get(getReservationForARoom);

export default router;
