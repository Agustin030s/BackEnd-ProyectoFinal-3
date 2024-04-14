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
    .custom((value) => {
      if (value >= 8 && value <= 10) {
        return true;
      } else {
        throw new Error("El dni debe tener entre 8 y 10 números");
      }
    })
    .withMessage("El DNI debe tener entre 8 y 10 dígitos"),
  check("telefono")
    .notEmpty()
    .withMessage("El telefono es un dato obligatorio")
    .isNumeric()
    .withMessage("El telefono debe ser un valor numerico")
    .custom((value) => {
      if (value >= 7 && value <= 15) {
        return true;
      } else {
        throw new Error("El telefono debe tener entre 7 y 15 números");
      }
    })
    .withMessage("El telefono debe tener entre 7 y 15 números"),
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
    .withMessage("El numero de habitacion tiene que ser un valor numerico")
    .custom(async (value) => {
      const existingRoom = await Room.findOne({ numero: value });
      if (existingRoom) {
        throw new Error("El número de habitación ya está en uso");
      }
      return true;
    })
    .custom((value) => {
      if (value >= 1 && value <= 30) {
        return true;
      } else {
        throw new Error("El numero de habitacion debe estar entre 1 y 30");
      }
    }),
  check("fechaInicio")
    .notEmpty()
    .withMessage("La fecha de inicio es un dato obligatorio")
    .isDate()
    .withMessage("La feche de inicio debe ser dormato Date")
    .custom((value) => {
      const inputDate = new Date(value);
      const currentDate = new Date();
      return inputDate >= currentDate;
    })
    .withMessage(
      "La fecha de inicio debe ser igual o posterior a la fecha actual"
    ),
  check("fechaFin")
    .notEmpty()
    .withMessage("La fecha de fin es un dato obligatorio")
    .isDate()
    .withMessage("La feche de fin debe ser dormato Date")
    .custom((value) => {
      const inputDate = new Date(value);
      const currentDate = new Date();
      return inputDate >= currentDate;
    })
    .withMessage(
      "La fecha de fin debe ser igual o posterior a la fecha actual"
    ),
  check("total")
    .notEmpty()
    .withMessage("El total es obligatorio")
    .custom((value) => {
      if (value >= 4000 && value <= 20000000) {
        return true;
      } else {
        throw new Error("El total debe ser entre 4 mil y 20 millones");
      }
    })
    .withMessage("El total debe ser entre 4 mil y 20 millones"),
  (req, res, next) => validationResultFunction(req, res, next),
];

export default reservationValidation;
