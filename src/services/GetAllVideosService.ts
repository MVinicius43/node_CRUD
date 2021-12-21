import { getRepository } from "typeorm";
import { Video } from "../database/entities/Videos";


export class GetAllVideosService {
    async execute() {
        const repo = getRepository(Video);

        const videos = await repo.find({
            relations: ["category"]
        });

        return videos;
    }
}