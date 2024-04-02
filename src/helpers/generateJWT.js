import jwt from "jsonwebtoken";
import "dotenv/config";

const generateJWT = async (uid, email) => {
  try {
    const payload = { uid, email };
    const token = await jwt.sign(payload, process.env.SECRET_JWT);
    return token;
  } catch (error) {
    console.error("Error al generar el token:", error.message);
    throw new Error("No se pudo generar el token");
  }
};
export default generateJWT;
