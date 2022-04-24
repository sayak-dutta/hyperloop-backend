import { InjectModel } from '@nestjs/mongoose';
import { About, AboutDocument } from './about.schema';
import { Model } from 'mongoose';

export class AboutService {
  constructor(
    @InjectModel(About.name) private aboutModel: Model<AboutDocument>,
  ) {}

  async findOneById(id: string) {
    let about = await this.aboutModel.findById(id);
    console.log(about);
    return about
  }

  async findAll() {
    return await this.aboutModel.find().lean().exec();
  }

  async create(aboutDocument: any): Promise<any> {
    return new this.aboutModel(aboutDocument).save();
  }

  async update(id: string, aboutDocument: any): Promise<any> {
    return this.aboutModel.findByIdAndUpdate(id, aboutDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.aboutModel.findByIdAndDelete(id);
  }
}
