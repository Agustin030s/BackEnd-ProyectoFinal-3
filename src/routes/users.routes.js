import { Router } from "express";
import { crearUsuario } from "../controllers/user.controllers.js";
import userValidation from "../helpers/userValidation.js";

const router = Router();

router.route('/nuevo').post([userValidation],crearUsuario);

export default router;