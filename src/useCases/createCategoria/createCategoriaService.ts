import { CategoriaRepository } from "../../repositories/ProductsRepository";

interface IRuequestDTO {
    name: string,
}

export class CreateCategoriaService {
    constructor(private categoriaRepository: CategoriaRepository) { }

    execute({ name }: IRuequestDTO): void {
        this.categoriaRepository.create({ name })
    }
}