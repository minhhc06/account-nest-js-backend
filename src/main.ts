import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = await app.listen(3000);
  Logger.log(`application listening on port ${port}`);
}
bootstrap();

