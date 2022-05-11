import { Privacy, PrivacyDocument } from './privacy.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


export class PrivacyService {
  constructor(
    @InjectModel(Privacy.name) 
    private privacyModel: Model<PrivacyDocument>,
  ) {}

  async findOneById(id: string) {
    return await this.privacyModel.findById(id);
  }

  async findAll() {
    return await this.privacyModel.find().lean().exec();
  }

  async create(privacyDocument: any): Promise<any> {
    return new this.privacyModel(privacyDocument).save();
  }

  async update(id: string, privacyDocument: any): Promise<any> {
    return this.privacyModel.findByIdAndUpdate(id, privacyDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.privacyModel.findByIdAndDelete(id);
  }
}
