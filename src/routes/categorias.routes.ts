import { Router } from "express";
import { createCategoriaController } from "../useCases/createCategoria";

const categoriasRouter = Router();

categoriasRouter.post("/categorias", (req, res) => createCategoriaController.handle(req, res));



export default categoriasRouter;