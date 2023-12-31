import { Env } from '@bh/api/shared/infrastructure';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  csurf({ cookie: true });
  const prefix = 'v1';
  app.setGlobalPrefix(prefix);
  const configService: ConfigService = app.get(ConfigService);
  const host = configService.get(Env.HOST);
  const port = configService.get(Env.PORT);
  const config = new DocumentBuilder()
    .setTitle('Basement Hacks API')
    .setDescription('Monolithic API for BH')
    .setVersion('1.0.0')
    .addCookieAuth('auth', {
      type: 'http',
      in: 'header/request',
      scheme: 'cookie',
      bearerFormat: 'JWT'
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(port);
  Logger.debug(`API: http://${host}:${port}/${prefix}`);
  Logger.debug(`Swagger: http://${host}:${port}/swagger`);
}

bootstrap();
