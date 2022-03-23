import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSession, UserSessionSchema } from './schemas/user-session.schema';
import { UserLocalStrategy } from './strategies/user-local.strategy';
import { UserJwtStrategy } from './strategies/user-jwt.strategy';
import { User, UserSchema } from 'src/user/user.schema';

@Module({
    imports: [
      PassportModule.register({ session: false }),
      JwtModule.registerAsync({
        useFactory: async () => ({
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: process.env.JWT_EXPIRES_IN
          }
        }),
      }),
      MongooseModule.forFeature([{ name: UserSession.name, schema: UserSessionSchema }]),
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
      
    ],
    providers: [AuthService, UserLocalStrategy, UserJwtStrategy],
    controllers: [AuthController],
    exports: [AuthService]

  })
  export class AuthModule {}
  