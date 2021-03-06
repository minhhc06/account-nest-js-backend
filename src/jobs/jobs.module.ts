import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs.controller';
import { JobsRepository } from './jobs.repository';
import { JobsService } from './jobs.service';

@Module({
    imports: [TypeOrmModule.forFeature([ JobsRepository])],
    controllers: [JobsController],
    providers: [JobsService],
  })
export class JobsModule{}