import {Body, Controller, Get, Post} from '@nestjs/common'
import { Account } from './account.enity';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';

@Controller('account')
export class AccountController{
    constructor(private accountServce: AccountService){
    }
    @Get()
    getAccountTest() : Promise<Account[]>{
        return this.accountServce.getTasks();
    }

    @Post()
    createTask(@Body() accountsDto: AccountDto) : Promise<Account>{
      return this.accountServce.createTask(accountsDto);
    }

}