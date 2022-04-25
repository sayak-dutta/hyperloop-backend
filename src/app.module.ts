import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OTPModule } from './otp/otp.module';
import { BoardModule } from './board/board.module';
import PlayerModule from './player/player.module';
import { SponsorWalletModule } from './sponsorWallet/sponsorWallet.module';
import SponsorModule from './sponsor/sponsor.module';
import NewsModule from './news-update-admin/newsUpdateAdmin.module';
import AboutModule from './about-us-admin/about.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ServeStaticModule.forRootAsync({
      useFactory: () => [
        {
          rootPath: join(__dirname, '..', '..', 'hyperloop-frontend', 'build'),
          exclude: [`/${process.env.GLOBAL_PREFIX}*`],
          serveStaticOptions: {
            dotfiles: 'deny',
          },
        },
      ],
    }),

    MongooseModule.forRootAsync({
      useFactory: () => {
        if (process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD) {
          return {
            uri: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
          };
        } else {
          return {
            uri: `mongodb://${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
          };
        }
      },
    }),
    UserModule,
    AuthModule,
    OTPModule,
    SponsorModule,
    BoardModule,
    PlayerModule,
    SponsorWalletModule,
    NewsModule
    AboutModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
