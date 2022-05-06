import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type PrivacyDocument = Privacy & Document;

@Schema()
export class Privacy {
  @Prop()
  privacyTitle: string;

  @Prop()
  privacyDate: string;

  @Prop()
  privacyDescription: string;
}

export const PrivacySchema = SchemaFactory.createForClass(Privacy);
