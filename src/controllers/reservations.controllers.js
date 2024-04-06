import Reservation from "../database/models/reservation.js";
import Room from "../database/models/room.js";

export const reserveRoom = async (req, res) => {
  try {
    const { numHabitacion, fechaInicio, fechaFin } = req.body;
    const room = await Room.findOne({ numero: numHabitacion });

    if (!room) res.status(404).json({ mensaje: "Habitación no encontrada" });

    if (!room.disponibilidad)
      res.status(400).json({ mensaje: "La habitación no esta disponible" });

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
