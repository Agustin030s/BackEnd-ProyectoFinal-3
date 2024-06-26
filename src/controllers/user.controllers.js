import User from "../database/models/user.js";
import bcrypt from "bcrypt";
import generateJWT from "../helpers/generateJWT.js";

export const createUser = async (req, res) => {
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const searchedUser = await User.findOne({ email });
    if (!searchedUser) {
      return res.status(400).json({
        message: "Credenciales incorrectas",
      });
    }
    if (!searchedUser.activo) {
      return res.status(400).json({
        message: "Usuario suspendido",
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

export const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const searchedUser = await User.findById(id);
    if (!searchedUser) {
      return res.status(404).json({
        message: "No se encontro el usuario buscado para editar",
      });
    }

    await User.findByIdAndUpdate(id, body);
    res.status(200).json({
      message: "El usuario fue modificado correctamente",
    });
  } catch (error) {
    `El siquiente error ocurrio al intentar modificar el usuario: ${error}`;
    res.status(404).json({
      message: "Ocurrio un error al intentar modificar el usuario",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const searchedUser = await User.findById(id);
    if (!searchedUser) {
      return res.status(404).json({
        message: "No se encontro el usuario buscado",
      });
    }

    if (searchedUser.rol === "Administrador") {
      return res.status(403).json({
        message: "No tienes permisos para eliminar a este usuario",
      });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({
      message: "El usuario fue borrado correctamente",
    });
  } catch (error) {
    console.error(`El siguiente error ocurrio al buscar el usaruio: ${error}`);
    res.status(500).json({
      message: "Ocurrio un error al borrar la habitacion",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "no se pudo encontrar los usuarios",
    });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const searchUser = await User.findById(id);
    res.status(200).json(searchUser);
  } catch (error) {
    console.error("Ha ocurrido un error al encontrar el usuario: ", error);
    res.status(404).json({
      message: "No se encontro un usuario con ese id",
    });
  }
};

export const suspendUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { activo } = req.body;

    const searchUser = await User.findById(id);

    if (!searchUser) {
      return res.status(404).json({
        message: "No se encontró un usuario con ese ID",
      });
    }

    searchUser.activo = activo;

    await searchUser.save();
    res.status(200).json({
      message: `El usuario con ID ${id} ha sido ${
        activo ? "reactivado" : "suspendido"
      }.`,
    });
  } catch (error) {
    console.error("Ha ocurrido un error al suspender el usuario: ", error);
    res.status(500).json({
      message: "Ha ocurrido un error en el servidor",
    });
  }
};
