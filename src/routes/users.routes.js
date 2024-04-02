import { Router } from "express";
import { crearUsuario, obtenerUsuarios } from "../controllers/user.controllers.js";
const router = Router();

router.route('/nuevo').post(crearUsuario);
router.route('/').get(obtenerUsuarios)

export default router;