import {Body, Controller, Get, Post} from '@nestjs/common'
import { AccountNest } from './account.enity';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';

@Controller('account')
export class AccountController{
    constructor(private accountServce: AccountService){
    }
    @Get()
    getAccountTest() : Promise<AccountNest[]>{
        return this.accountServce.getTasks();
    }

    @Post()
    createTask(@Body() accountsDto: AccountDto) : Promise<AccountNest>{
      return this.accountServce.createTask(accountsDto);
    }

}