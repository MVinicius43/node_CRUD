import { getRepository } from "typeorm";
import { Category } from "../database/entities/Category";

export class DeleteCategoriesServices {
    async execute(id: string) {
        const repo = getRepository(Category);

        if (!(await repo.findOne(id))) {
            return new Error("Category does not exists.")
        }

        await repo.delete(id);
    }
}