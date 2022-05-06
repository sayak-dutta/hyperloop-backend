import { InjectModel } from '@nestjs/mongoose';
import { News, NewsDocument } from './newsUpdateAdmin.schema';
import { Model } from 'mongoose';

export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {}

  async findOneById(id: string) {
    return await this.newsModel.findById(id);
  }

  async findAll() {
    return await this.newsModel.find().lean().exec();
  }

  async create(newsDocument: any): Promise<any> {
    return new this.newsModel(newsDocument).save();
  }

  async update(id: string, newsDocument: any): Promise<any> {
    return this.newsModel.findByIdAndUpdate(id, newsDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.newsModel.findByIdAndDelete(id);
  }
}
