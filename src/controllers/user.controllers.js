import User from "../database/models/user.js";
import bcrypt from "bcrypt";
import generateJWT from "../helpers/generateJWT.js";

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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const searchedUser = await UserActivation.findOne({ email });
    if (!searchedUser) {
      return res.status(400).json({
        message: "Credenciales incorrectas",
      });
    }
    const validPassword = bcrypt.compareSync(password, searchedUser.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Credenciales incorrectas",
      });
    }
    const token = await generateJWT(searchedUser._id);
    res.status(200).json({
      message: "El usuario existe",
      email: searchedUser.email,
      nombreCompleto: searchedUser.nombreCompleto,
      rol: searchedUser.rol,
      token,
    });
  } catch (error) {
    console.error(
      `Los siguientes errores ocurrieron al intentar loguearse: ${error}`
    );
    res.status(500).json({
      message: "Ocurrio un error durante el login",
    });
  }
};

export const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await User.find();
      res.status(200).json(usuarios);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        message: "no se pudo encontrar los usuarios",
      });
    }
};
