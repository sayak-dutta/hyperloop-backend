import { InjectModel } from '@nestjs/mongoose';
import { Banner, BannerDocument } from './banner.schema';
import { Model } from 'mongoose';

export class BannerService {
  constructor(
    @InjectModel(Banner.name) private bannerModel: Model<BannerDocument>,
  ) {}

  async findOneById(id: string) {
    return await this.bannerModel.findById(id);
  }

  async findAll() {
    return await this.bannerModel.find().lean().exec();
  }

  async create(bannerDocument: any): Promise<any> {
    return new this.bannerModel(bannerDocument).save();
  }

  async update(id: string, bannerDocument: any): Promise<any> {
    return this.bannerModel.findByIdAndUpdate(id, bannerDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.bannerModel.findByIdAndDelete(id);
  }
}
