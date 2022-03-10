import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';


async function bootstrap() {

  //Create Nest App Module
  const app = await NestFactory.create(AppModule);
  
  //Enable request logging
  app.use(morgan('combined'));

  //Enable CORS
  app.enableCors();

  //Configure config service
  const configService = app.get(ConfigService);

  //Get global prefix
  const globalPrefix = configService.get<string>('GLOBAL_PREFIX', 'api');

  //Set global prefix
  app.setGlobalPrefix(globalPrefix)

  //API Versioning
  app.enableVersioning({
    type:VersioningType.URI,
    defaultVersion: '1'
  });

  //Enable global validation pipe
  app.useGlobalPipes(new ValidationPipe({transform:true}));

  //Start server at the configured port
  await app.listen(3000);
}
bootstrap();
