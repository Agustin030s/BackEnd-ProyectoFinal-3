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
    min: 8,
    max: 10,
    unique: true,
  },
  telefono: {
    type: Number,
    required: true,
    min: 9,
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
  numHabitacion: {
    type: Number,
    required: true
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);

export default Reservation;
