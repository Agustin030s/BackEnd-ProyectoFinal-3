import Reservation from "../database/models/reservation.js";
import Room from "../database/models/room.js";

export const reserveRoom = async (req, res) => {
  try {
    const { numHabitacion, fechaInicio, fechaFin } = req.body;
    const room = await Room.findOne({ numero: numHabitacion });
    if (!room)
      return res.status(404).json({ mensaje: "Habitación no encontrada" });
    if (!room.disponibilidad)
      return res
        .status(400)
        .json({ mensaje: "La habitación no esta disponible" });
    const currentDate = new Date();
    const initReserve = new Date(fechaInicio);
    const finishReserve = new Date(fechaFin);
    if (initReserve < currentDate)
      return res.status(400).json({
        mensaje:
          "La fecha de inicio de la reserva no puede ser menor a la fecha actual",
      });
    if (finishReserve <= initReserve)
      return res.status(400).json({
        mensaje:
          "La fecha de fin no puede ser menor o igual a la fecha de inicio",
      });
    // Verificar si hay reservas que se solapen con las fechas solicitadas
    const overlappingReservation = await Reservation.findOne({
      numHabitacion,
      fechaInicio: { $lte: fechaFin },
      fechaFin: { $gte: fechaInicio },
    });
    if (overlappingReservation) {
      return res.status(400).json({
        mensaje: "Ya existe una reserva en las fechas seleccionadas",
      });
    }
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({
      mensaje: "Reserva creada con éxito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al realizar la reserva",
    });
  }
};

export const getReservationForARoom = async (req, res) => {
  try {
    const numero = req.params.numero;
    const reservations = await Reservation.find({ numHabitacion: numero });
    if (reservations.length === 0)
      return res
        .status(200)
        .json({ mensaje: "La habitación no tiene reservas" });
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "No se pudo obtener las reservas",
    });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const id = req.params.id;
    const searchedReservation = await Reservation.findById(id);
    if (!searchedReservation) {
      return res.status(404).json({
        message: "No se encontro la reserva buscada",
      });
    }
    await Reservation.findByIdAndDelete(id);
    res.status(200).json({ message: "La reserva fue borrada correctamente" });
  } catch (error) {
    console.error(
      `El siguiente error ocurrio al intentar borrar la reserva: ${error}`
    );
    res.status(500).json({
      message: "Ocurrio un error al borrar la reserva",
     });
  }
};

export const getReservationById = async (req, res) => {
  try {
    const id = req.params.id;
    const searchedReservation = await Reservation.findById(id);
    res.status(200).json(searchedReservation);
  } catch (error) {
    console.error(
      `Los siguientes errores ocurrieron al intentar buscar la reserva: ${error}`
    );
    res.status(404).json({
      message: "No se encontro una reserva con ese id",
    });
  }
};
