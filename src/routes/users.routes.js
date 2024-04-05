import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserByEmail,
  deleteUser,
  editUser,
  login,
  getUserByID,
} from "../controllers/user.controllers.js";
import userValidation from "../helpers/userValidation.js";
import JWTValidation from "../helpers/jwtValidation.js";

const router = Router();

router.route("/").get(getUsers).post(login);
router.route("/nuevo").post([userValidation], createUser);
router.route("/actualizar/:id").put([JWTValidation, userValidation], editUser);
router.route("/eliminar/:id").delete(deleteUser);
router.route("/obtenerEmail").get(getUserByEmail);
router.route("/:id").get(getUserByID);

export default router;
