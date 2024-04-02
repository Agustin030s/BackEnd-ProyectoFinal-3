import { Router } from "express";
import { createUser, deleteUser, editUser } from "../controllers/user.controllers.js";
import userValidation from "../helpers/userValidation.js";

const router = Router();

router.route('/nuevo').post([userValidation], createUser);
router.route('/nuevo/:id').put(editUser).delete(deleteUser)

export default router;