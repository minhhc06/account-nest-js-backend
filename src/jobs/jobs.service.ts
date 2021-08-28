import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from "./jobs.enity";
import { JobsDto } from "./dto/jobs.dto";
import { JobsRepository } from "./jobs.repository";


@Injectable()
export class JobsService{
    constructor(
        @InjectRepository(JobsRepository) 
        private jobsRepository: JobsRepository,
    ){}

    getTasks(): Promise<Jobs[]>{
        return this.jobsRepository.getTasks();
    }

    createTask(jobsDto: JobsDto) : Promise<Jobs> {
        return this.jobsRepository.createTask(jobsDto);
    
    }
}