import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from 'src/user/user.schema';
import { User } from 'src/user/user.schema';
import { compare } from 'bcrypt';


@Injectable()
export class UserLocalStrategy extends PassportStrategy(Strategy, 'user-local') {
  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){
    super();
  }
  

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username }).select('+password').exec();
    if(!user){
      throw new UnauthorizedException();
    }
    const isValid = await compare(password, user.password);
    if(!isValid){
      throw new UnauthorizedException();
    }
    return user;
  }
}