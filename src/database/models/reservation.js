import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 80,
  },
  dni: {
    type: Number,
    required: true,
    min: 1000000,
    max: 99999999,
  },
  telefono: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        const pattern =
          /^((\+54\s?)?(\s?9\s?)?\d{2,3}[\s-]?\d{3,4}-?\d{3,4}|\d{10,11}|(\d{3,4}[\s-]){1,2}\d{3,4})$/g;
        return pattern.test(value);
      },
      message: (props) =>
        `${props.value} debe ser un formato de telefono valido`,
    },
  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 340,
    validate: {
      validator: (valor) => {
        const pattern =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return pattern.test(valor);
      },
      message: (props) => `${props.value} no es un email válido`,
    },
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  total: {
    type: Number,
    required: true,
    min: 4000,
    max: 20000000,
  },
  numHabitacion: {
    type: Number,
    min: 1,
    max: 30,
    required: true,
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);

export default Reservation;
