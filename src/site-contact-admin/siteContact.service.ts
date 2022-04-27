import { InjectModel } from '@nestjs/mongoose';
import { SiteContact, SiteContactDocument } from './siteContact.schema';
import { Model } from 'mongoose';

export class SiteContactService {
  constructor(
    @InjectModel(SiteContact.name)
    private siteContactModel: Model<SiteContactDocument>,
  ) {}

  async findOneById(id: string) {
    return await this.siteContactModel.findById(id);
  }

  async findAll() {
    return await this.siteContactModel.find().lean().exec();
  }

  async create(siteContactDocument: any): Promise<any> {
    return new this.siteContactModel(siteContactDocument).save();
  }

  async update(id: string, siteContactDocument: any): Promise<any> {
    return this.siteContactModel.findByIdAndUpdate(id, siteContactDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.siteContactModel.findByIdAndDelete(id);
  }
}
