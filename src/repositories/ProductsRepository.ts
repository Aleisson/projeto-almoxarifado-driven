import prisma from "../database/db";
import { Categoria } from "../model/Categoria";

export class CategoriaRepository {

    async create({ id, name }: Categoria): Promise<void> {
        await prisma.categorias.create({
            data: {
                id,
                name
            }
        });
    }

    async getAll(): Promise<Categoria[]>{
        return await prisma.categorias.findMany();
    }
}