import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from './user.schema';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOneById(id: string) {
    return this.userModel.findById(id).exec();
  }

  async list() {
    let users= this.userModel.find().lean().exec();
    return users;
  }

  async create(userDocument: any): Promise<any> {
    userDocument.password = await hash(userDocument.password, 10);
    return new this.userModel(userDocument).save();
  }

  async update(id: string, userDocument: any): Promise<any> {
    return this.userModel
      .findByIdAndUpdate(id, userDocument, {
        returnDocument: 'after',
      })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.userModel.findByIdAndRemove(id).exec();
  }

  async verifyUser(userDocument: any): Promise<any> {
    return await this.userModel
      .findOne({ username: userDocument.username })
      .exec();
  }
}
