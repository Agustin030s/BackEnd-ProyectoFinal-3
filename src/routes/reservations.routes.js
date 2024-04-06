import { Router } from "express";
import { getReservationForARoom, reserveRoom } from "../controllers/reservations.controllers.js";

const router = Router();

router.route("/reservation").get().post(reserveRoom);
router.route("/reservation/:id").get().delete();
router.route("/reservation/:numero").get(getReservationForARoom);

export default router;
