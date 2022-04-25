import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestimonialDocument = Testimonial & Document;

@Schema()
export class Testimonial {
  @Prop()
  customerImage: string;

  @Prop()
  customerName: string;

  @Prop()
  customerCountry: string;

  @Prop()
  customerReview: string;
}
export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);
