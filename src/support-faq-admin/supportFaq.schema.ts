import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type SupportFaqDocument = SupportFaq & Document;

@Schema()
export class SupportFaq {
  @Prop()
  questionFaq: string;

  @Prop()
  answerFaq: string;
}

export const SupportFaqSchema = SchemaFactory.createForClass(SupportFaq);
