import { Router } from "express";
import {
  crearUsuario,
  getUserByEmail,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/nuevo").post(crearUsuario);
router.route("/").get(getUserByEmail);

export default router;
