import { Router } from "express";

const categoriasRouter = Router();

categoriasRouter.get("/categorias", (_req, res) => {
    res.status(200).send({ message: "Teste" });
});

categoriasRouter.post("/categorias", (req, res) => {
    res.status(200).send({ message: "Teste" });
});