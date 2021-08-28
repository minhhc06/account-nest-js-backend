import {Body, Controller, Get, Post} from '@nestjs/common'
import { JobsDto } from './dto/jobs.dto';
import { Jobs } from './jobs.enity';
import { JobsService } from './jobs.service';


@Controller('jobs')
export class JobsController{
    constructor(private jobsService: JobsService){
    }
    @Get()
    getAccountTest() : Promise<Jobs[]>{
        return this.jobsService.getTasks();
    }

    @Post()
    createTask(@Body() jobsDto: JobsDto) : Promise<Jobs>{
      return this.jobsService.createTask(jobsDto);
    }

}