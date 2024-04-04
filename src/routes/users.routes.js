import { Router } from "express";
import { crearUsuario, obtenerUsuarios, getUserByEmail, deleteUser, editUser } from "../controllers/user.controllers.js";
import userValidation from "../helpers/userValidation.js";

const router = Router();


router.route('/nuevo').post([userValidation], createUser);
router.route('/nuevo/:id').put(editUser).delete(deleteUser)
router.route("/").get(getUserByEmail, obtenerUsuarios);


export default router;
