import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { JobsDto } from './dto/jobs.dto';
import { Jobs } from './jobs.enity';

@EntityRepository(Jobs)
export class JobsRepository extends Repository<Jobs> {
    async getTasks(): Promise<Jobs[]> {
        const query = this.createQueryBuilder('jobs').select("jobs");

        try {
            const tasks = await query.getMany();
            return tasks;
            
          } catch (error) {
            // this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, 
            // error.stack);
            throw new InternalServerErrorException();
          }

    }

    async createTask(jobsDto: JobsDto) : Promise<Jobs>{
        const { title, description , content , id} = jobsDto;
    
        const job = this.create({
          title,   
          description,
          content,
            id
        });
    
        await this.save(job);
        return job;
    }
}