import { Injectable } from "@nestjs/common";
import { AccountNest } from "./account.enity";
import { AccountRepository } from "./account.repository";
import { AccountDto } from "./dto/account.dto";
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class AccountService{
    constructor(
        @InjectRepository(AccountRepository) 
        private accountRepository: AccountRepository,
    ){}

    getTasks(): Promise<AccountNest[]>{
        return this.accountRepository.getTasks();
    }

    createTask(createTaskDto: AccountDto) : Promise<AccountNest> {
        return this.accountRepository.createTask(createTaskDto);
    
    }
}