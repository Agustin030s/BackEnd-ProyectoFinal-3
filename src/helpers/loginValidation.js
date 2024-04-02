import { check } from "express-validator";
import validationResult from "./validationResult.js";

const loginValidation = [
  check("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isLength({ min: 10, max: 340 })
    .withMessage("El email debe tener entre 10 y 340 caracteres")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .withMessage("Debe ser un formato de email valido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es un dato obligatorio")
    .isLength({ min: 8, max: 24 })
    .withMessage("La contraseña debe tener entre 8 y 24 caracteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .withMessage(
      "La contraseña debe contener al menos una mayuscula, una minuscula y un numero"
    ),
  (req, res, next) => validationResult(req, res, next),
];

export default loginValidation;
