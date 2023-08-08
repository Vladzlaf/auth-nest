import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import { EventEmitter2 } from '@nestjs/event-emitter';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const eventEmitter = app.get(EventEmitter2);

  eventEmitter.on('user.registered', ({ username }) => {
    console.log(`Пользователь ${username} успешно зарегистрирован`);
  });

  await app.listen(3000);
}

bootstrap();
