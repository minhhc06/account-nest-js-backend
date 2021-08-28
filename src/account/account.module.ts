import { Module } from '@nestjs/common';

import {AccountController} from './account.controller';
import {AccountRepository} from './account.repository';
import {AccountService} from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ AccountRepository])],
    controllers: [AccountController],
    providers: [AccountService],
  })
export class AccountModule{}