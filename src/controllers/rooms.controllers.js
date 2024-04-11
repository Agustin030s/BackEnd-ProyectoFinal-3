import Room from "../database/models/room.js";

export const createRoom = async (req, res) => {
  try {
    const newRoom = new Room(req.body);

    await newRoom.save();
    res.status(201).json({
      message: "Habitación creada con éxito",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Ocurrio un error al crear la habitación",
    });
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Ha habido un error al listar las habitaciones:", error);
    res.status(404).json({
      message: "No se pudo obtener la lista de habitaciones",
    });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const id = req.params.id;
    const searchRoom = await Room.findById(id);
    res.status(200).json(searchRoom);
  } catch (error) {
    console.error("Ha habido un error al buscar el cuarto:", error);
    res.status(404).json({
      message: "No se ha encontrado la habitacion esa id",
    });
  }
};

export const getRoomByCategory = async (req, res) => {
  try {
    const category = req.params.categoria;
    const rooms = await Room.find({ categoria: category });
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Ha habido un error al listar las habitaciones:", error);
    res.status(404).json({
      message: "No se han podido obtener las habitaciones",
    });
  }
};

export const editRoom = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const searchedRoom = await Room.findById(id);
    if (!searchedRoom) {
      return res.status(404).json({
        message: "No se encontro la habitacion buscada",
      });
    }

    await Room.findByIdAndUpdate(id, body);
    res
      .status(200)
      .json({ message: "La habitacion fue modificada correctamente" });
  } catch (error) {
    console.error(
      `El siquiente error ocurrio al intentar modificar la habitacion: ${error}`
    );
    res.status(404).json({
      mensaje: "Ocurrio un error al intentar modificar la habitacion",
    });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const id = req.params.id;
    const searchedRoom = await Room.findById(id);
    if (!searchedRoom) {
      return res.status(404).json({
        message: "No se encontro la habitacion buscada",
      });
    }
    await Room.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "La habitacion fue borrada correctamente" });
  } catch (error) {
    console.error(
      `El siguiente error ocurrio al buscar la habitacion: ${error}`
    );
    res.status(500).json({
      message: "Ocurrio un error al borrar la habitacion",
    });
  }
};
