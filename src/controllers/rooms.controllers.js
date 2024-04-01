


















































export const deleteRoom = async (res, req) => {
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
