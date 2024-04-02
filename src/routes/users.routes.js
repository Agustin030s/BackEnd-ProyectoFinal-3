import { Router } from "express";
import { crearUsuario } from "../controllers/user.controllers.js";

const router = Router();

router.route('/nuevo').post(crearUsuario);

export default router;