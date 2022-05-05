import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.schema';
import { Document, SchemaTypes } from 'mongoose';
import { Board } from 'src/board/board.schema';

export type PrivacyDocument = Privacy & Document;

@Schema()
export class Privacy {
  
  
  @Prop()
  privacyDate: string;

  @Prop()
  privacyTitle: string;

  @Prop()
  privacyDescription: string;
  
}

export const PrivacySchema = SchemaFactory.createForClass(Privacy);
