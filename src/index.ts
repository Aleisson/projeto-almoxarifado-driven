import express, { json } from "express";
import cors from "cors";
import categoriasRouter from "./routes/categorias.routes";

const server = express();

server.use(json());
server.use(cors());
server.use(categoriasRouter);


server.listen(5000, () => {
    console.log("Porta 5000");
});