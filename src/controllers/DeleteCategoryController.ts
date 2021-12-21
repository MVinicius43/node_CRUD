import { Request, Response } from 'express';
import { DeleteCategoriesServices } from '../services/DeleteCategoriesServices';

export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const services = new DeleteCategoriesServices();

        const result = await services.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}