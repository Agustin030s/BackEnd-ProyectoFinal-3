import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema({
  numero: {
    type: Number,
    required: true,
    min: 1,
    max: 30,
  },
  tipoHabitacion: {
    type: String,
    required: true,
    enum: ["Individual", "Doble", "Triple"],
  },
  categoria: {
    type: String,
    required: true,
    enum: [
      "Standard",
      "Deluxe",
      "Ejecutiva",
      "Suite",
      "Presidencial",
      "Penthouse Suite",
    ],
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 350,
  },
  precio: {
    type: Number,
    required: true,
    min: 4000,
    max: 500000,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        const pattern =
          /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
        return pattern.test(valor);
      },
      message: (props) => `${props.value} no es una url válida`,
    },
  },
  disponibilidad: {
    type: Boolean,
    required: true,
  },
});

const Room = mongoose.model("room", roomSchema);

export default Room;
