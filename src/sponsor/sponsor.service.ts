import { InjectModel } from '@nestjs/mongoose';
import { Sponsor, SponsorDocument } from './sponsor.schema';
import { Model } from 'mongoose';

export class SponsorService {
  constructor(
    @InjectModel(Sponsor.name) private sponsorModel: Model<SponsorDocument>,
  ) {}
  
  async findOneById(id: string) {
    return await this.sponsorModel.findById(id);
  }

  async findAll() {
    return await this.sponsorModel.find().lean().exec();
  }
  async create(sponsorDocument: any): Promise<any> {
    return new this.sponsorModel(sponsorDocument).save();
  }
  async update(id: string, sponsorDocument: any): Promise<any> {
    return this.sponsorModel.findByIdAndUpdate(id, sponsorDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.sponsorModel.findByIdAndDelete(id);
  }
}
