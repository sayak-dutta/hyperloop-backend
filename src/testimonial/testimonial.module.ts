import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TestimonialController,
  TestimonialsController,
} from './testimonial.controller';
import { Testimonial, TestimonialSchema } from './testimonial.schema';
import { TestimonialService } from './testimonial.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Testimonial.name,
        schema: TestimonialSchema,
      },
    ]),
  ],
  providers: [TestimonialService],
  controllers: [TestimonialController, TestimonialsController],
  exports: [TestimonialService],
})
export default class TestimonialModule {}
