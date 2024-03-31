import Room from "../database/models/room";

export const getRooms = async (res, req) => {
    try {
        const rooms = await Room.find() 
        res.status(200).json(rooms);
    } catch (error) {
        console.error("Ha habido un error al listar las habitaciones:", error)
        res.status(404).json({
            mensaje: "No se pudo obtener la lista de habitaciones"
        })
    }
}

