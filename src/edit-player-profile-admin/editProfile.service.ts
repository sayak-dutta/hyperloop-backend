import { InjectModel } from '@nestjs/mongoose';
import { EditProfile, EditProfileDocument } from './editProfile.schema';
import { Model } from 'mongoose';

export class EditProfileService {
  constructor(
    @InjectModel(EditProfile.name) private editProfileModel: Model<EditProfileDocument>,
  ) {}

  async findOneById(id: string) {
    return await this.editProfileModel.findById(id);
  }

  async findAll() {
    return await this.editProfileModel.find().lean().exec();
  }

  async create(editProfileDocument: any): Promise<any> {
    return new this.editProfileModel(editProfileDocument).save();
  }

  async update(id: string, editProfileDocument: any): Promise<any> {
    return this.editProfileModel.findByIdAndUpdate(id, editProfileDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.editProfileModel.findByIdAndDelete(id);
  }
}
