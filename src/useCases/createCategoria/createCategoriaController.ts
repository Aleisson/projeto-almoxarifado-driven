import { Request, Response } from "express";
import { CreateCategoriaService } from "./createCategoriaService";

export class CreateCategoriaController {
    constructor(private createClientCreate: CreateCategoriaService) { }

    handle(req: Request, res: Response): Response {
        const { name } = req.body;
        
        this.createClientCreate.execute({ name });

        return res.sendStatus(201);
    }
}