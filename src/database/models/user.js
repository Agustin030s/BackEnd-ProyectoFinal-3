import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 80,
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
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: ["Administrador", "Usuario"],
  },
  activo: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
