import { InjectModel } from '@nestjs/mongoose';
import { Testimonial, TestimonialDocument } from './testimonial.schema';
import { Model } from 'mongoose';

export class TestimonialService {
  constructor(
    @InjectModel(Testimonial.name)
    private testimonialModel: Model<TestimonialDocument>,
  ) {}

  async findOneById(id: string) {
    return await this.testimonialModel.findById(id);
  }

  async findAll() {
    return await this.testimonialModel.find().lean().exec();
  }

  async create(TestimonialDocument: any): Promise<any> {
    return new this.testimonialModel(TestimonialDocument).save();
  }

  async update(id: string, testimonialDocument: any): Promise<any> {
    return this.testimonialModel.findByIdAndUpdate(id, testimonialDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.testimonialModel.findByIdAndDelete(id);
  }
}
