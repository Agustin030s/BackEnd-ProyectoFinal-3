import { check } from "express-validator";
import validationResultFunction from "./validationResult.js";

const reservationValidation = [
  check("nombreCompleto")
    .notEmpty()
    .withMessage("El nombre es un dato obligatorio")
    .isLength({ min: 3, max: 80 })
    .withMessage("El nombre debe tener entre 3 y 80 caracteres"),
  check("dni")
    .notEmpty()
    .withMessage("El DNI es un dato obligatorio")
    .isNumeric()
    .withMessage("El DNI debe ser un valor numerico")
    .matches(/^\d{7,8}$/)
    .withMessage("Debe tener 7 u 8 caracteres"),
  check("telefono")
    .notEmpty()
    .withMessage("El telefono es un dato obligatorio")
    .isNumeric()
    .withMessage("El telefono debe ser un valor numerico")
    .matches(
      /^((\+54\s?)?(\s?9\s?)?\d{2,3}[\s-]?\d{3,4}-?\d{3,4}|\d{10,11}|(\d{3,4}[\s-]){1,2}\d{3,4})$/g
    )
    .withMessage("Debe tener un formato de teledono valido"),
  check("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isLength({ min: 10, max: 340 })
    .withMessage("El email debe tener entre 10 y 340 caracteres")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .withMessage("Debe ser un formato de email valido"),
  check("numHabitacion")
    .notEmpty()
    .withMessage("El numero de habitacion es un dato obligatorio")
    .isNumeric()
    .withMessage("El numero de habitacion tiene que ser un valor numerico"),
  check("fechaInicio")
    .notEmpty()
    .withMessage("La fecha de inicio es un dato obligatorio")
    .isISO8601()
    .toDate()
    .withMessage("La feche de inicio debe ser formato Date"),
  check("fechaFin")
    .notEmpty()
    .withMessage("La fecha de fin es un dato obligatorio")
    .isISO8601()
    .toDate()
    .withMessage("La feche de fin debe ser formato Date"),
  (req, res, next) => validationResultFunction(req, res, next),
];

export default reservationValidation;
