import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),

    ServeStaticModule.forRootAsync({
			useFactory: () => [
				{
					rootPath: join(__dirname, '..', '..', 'ez-autocare-frontend', 'build'),
					exclude: [`/${process.env.GLOBAL_PREFIX}*`],
					serveStaticOptions: {
						dotfiles: 'deny',
					},
				},
			],
		}),

    MongooseModule.forRootAsync({
      useFactory: () => {
        if(process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD){
          return {
						uri: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
					};
        }
        else{
          return {
						uri: `mongodb://${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
					};
        }
      }
    }),
    UserModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
