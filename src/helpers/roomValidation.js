import { check } from "express-validator";
import validationResultFunction from "./validationResult.js";
import Room from "../database/models/room.js";

const roomValidation = [
  check("numero")
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
  check("tipoHabitacion")
    .notEmpty()
    .withMessage("El tipo de habitacion es un dato obligatorio")
    .isIn(["Individual", "Doble", "Triple"])
    .withMessage(
      "El tipo debe ser uno de los siguiente opciones: Individual, Doble, Triple"
    ),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn([
      "Standard",
      "Deluxe",
      "Ejecutiva",
      "Suite",
      "Presidencial",
      "Penthouse Suite",
    ])
    .withMessage(
      "La categoria debe ser una de las siguiente opciones: Standard, Deluxe, Ejecutiva, Suite, Presidencial, and Penthouse Suite"
    ),
  check("descripcion")
    .notEmpty()
    .withMessage("La descripción es obligatoria")
    .isLength({ min: 10, max: 350 })
    .withMessage("La descripción debe tener entre 10 y 350 caracteres"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio tiene que ser un valor numerico")
    .custom((value) => {
      if (value >= 4000 && value <= 500000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre $5000 y $500000");
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i)
    .withMessage(
      "La imagen debe tener el formato de una URL valido y terminar en png, jpg, jpeg, gif, svg"
    ),
  check("disponibilidad")
    .notEmpty()
    .withMessage("La disponibilad es un dato obligatorio")
    .isBoolean()
    .withMessage("La disponibilidad tiene que ser un valor booleano"),
  (req, res, next) => validationResultFunction(req, res, next),
];

export default roomValidation;
