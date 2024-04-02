import User from "../database/models/user.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuarioBuscado = await User.findOne({ email });
    if (usuarioBuscado) {
      return res.status(400).json({
        message: "Ya existe un usuario con el email enviado",
      });
    }
    const usuarioNuevo = new User(req.body);
    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    usuarioNuevo.password = bcrypt.hashSync(password, salt);
    await usuarioNuevo.save();
    res.status(201).json({
      message: "Usuario dado de alta exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "El usuario no pudo ser dado de alta",
    });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const searchedUser = await User.findOne({ email });
    res.status(200).json(searchedUser);
  } catch (error) {
    console.error(
      `Los siguientes errores ocurrieron al intentar buscar el usuario: ${error}`
    );
    res.status(404).json({
      message: "No se encontró el usuario con ese email",
    });
  }
};
