import { Router } from "express";
import { crearUsuario, obtenerUsuarios, getUserByEmail } from "../controllers/user.controllers.js";
import userValidation from "../helpers/userValidation.js";

const router = Router();

router.route("/").get(getUserByEmail, obtenerUsuarios);
router.route('/nuevo').post([userValidation],crearUsuario);

export default router;
