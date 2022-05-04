import { InjectModel } from '@nestjs/mongoose';
import { SupportFaq, SupportFaqDocument } from './supportFaq.schema';
import { Model } from 'mongoose';

export class SupportFaqService {
  constructor(
    @InjectModel(SupportFaq.name)
    private SupportFaqModel: Model<SupportFaqDocument>,
  ) {}

  async findOneById(id: string) {
    return await this.SupportFaqModel.findById(id);
  }

  async findAll() {
    return await this.SupportFaqModel.find().lean().exec();
  }

  async create(supportFaqDocument: any): Promise<any> {
    return new this.SupportFaqModel(supportFaqDocument).save();
  }

  async update(id: string, supportFaqDocument: any): Promise<any> {
    return this.SupportFaqModel.findByIdAndUpdate(id, supportFaqDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.SupportFaqModel.findByIdAndDelete(id);
  }
}
