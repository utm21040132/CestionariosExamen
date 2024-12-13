import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { controlador } from "./controllers/controlador.controller.js";

dotenv.config();
mongoose.connect(process.env.url)
.then(()=>{
    console.log("Conexion a la base de datos exitosa")
})
.catch((error)=>{
    console.log("Error al conectar a la base de datos ", error)
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Servidor se escucha correctamente")
})

controlador();