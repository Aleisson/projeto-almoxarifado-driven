import prisma from "../database/db";
import { Categoria } from "../model/Categoria";

export class CategoriaRepository {

    async create({ name }: Categoria): Promise<void> {
        await prisma.categorias.create({
            data: {
                name
            },
        });
    }

    async getAll(): Promise<Categoria[]> {
        return await prisma.categorias.findMany();
    }
}