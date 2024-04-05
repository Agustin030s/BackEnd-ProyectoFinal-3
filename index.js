import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import "./src/database/database.js";
import roomRouter from "./src/routes/rooms.routes.js"
import userRouter from "./src/routes/users.routes.js"
import reservationRouter from "./src/routes/reservations.routes.js"

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.info("Estoy en el puerto " + app.get("port"));
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

app.use('/api', roomRouter);
app.use('/api/user', userRouter);
app.use("/api/reservation", reservationRouter)
