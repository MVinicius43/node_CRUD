import { Request, Response } from 'express';
import { GetAllCategoriesServices } from '../services/GetAllCategoriesServices';

export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {
        const services = new GetAllCategoriesServices();

        const categories = await services.execute();

        return response.json(categories);
    }
}