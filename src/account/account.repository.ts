import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Account } from './account.enity';
import { AccountDto } from './dto/account.dto';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
    async getTasks(): Promise<Account[]> {
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

    async createTask(accountDto: AccountDto) : Promise<Account>{
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