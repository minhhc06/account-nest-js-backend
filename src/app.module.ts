import { Module } from '@nestjs/common';
import { from } from 'rxjs';

import {AccountModule} from './account/account.module';
import {JobsModule} from './jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
 
@Module({
  imports: [
    AccountModule,
    JobsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'account_nestjs',
      autoLoadEntities: true,
      synchronize: false,
    }),
],

})
export class AppModule {}
