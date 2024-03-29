import express from "express";
import "dotenv/config";

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.info("Estoy en el puerto " + app.get("port"));
});
