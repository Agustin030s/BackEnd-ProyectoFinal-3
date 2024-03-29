import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

const connectionData = mongoose.connection;

connectionData.once("open", () =>{
    console.info("Connected Database");
})

