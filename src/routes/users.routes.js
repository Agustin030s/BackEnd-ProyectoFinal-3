import { Router } from "express";
import {
  createUser,
  obtenerUsuarios,
  getUserByEmail,
  deleteUser,
  editUser,
  login,
} from "../controllers/user.controllers.js";
import userValidation from "../helpers/userValidation.js";
import JWTValidation from "../helpers/jwtValidation.js";

const router = Router();

router.route("/").get(obtenerUsuarios).post(login);
router.route("/nuevo").post([userValidation], createUser);
router.route("/actualizar/:id").put([JWTValidation, userValidation], editUser);
router.route("/eliminar/:id").delete(deleteUser);
router.route("/obtenerEmail").get(getUserByEmail);

export default router;
