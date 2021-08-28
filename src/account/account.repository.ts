import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AccountNest } from './account.enity';
import { AccountDto } from './dto/account.dto';

@EntityRepository(AccountNest)
export class AccountRepository extends Repository<AccountNest> {
    async getTasks(): Promise<AccountNest[]> {
        const query = this.createQueryBuilder('account');

        try {
            const tasks = await query.getMany();
            return tasks;
            
          } catch (error) {
            // this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, 
            // error.stack);
            throw new InternalServerErrorException();
          }

    }

    async createTask(accountDto: AccountDto) : Promise<AccountNest>{
        const { title, description , content , id} = accountDto;
    
        const account = this.create({
          title,
          description,
          content,
            id
        });
    
        await this.save(account);
        return account;
    }
}