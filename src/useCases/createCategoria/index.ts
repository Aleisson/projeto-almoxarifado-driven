import { CategoriaRepository } from "../../repositories/ProductsRepository"
import { CreateCategoriaService } from "./createCategoriaService";
import { CreateCategoriaController } from "./createCategoriaController";


const categoriaRepository = new CategoriaRepository();
const createClientService = new CreateCategoriaService(categoriaRepository);
export const createCategoriaController = new CreateCategoriaController(createClientService);