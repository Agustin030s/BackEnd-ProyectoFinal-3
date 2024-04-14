import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 80,
  },
  dni: {
    type: String,
    required: true,
    min: 8,
    max: 10,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
    min: 7,
    max: 15,
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
    unique: true,
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
