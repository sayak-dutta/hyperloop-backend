import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.schema';
import { Document, SchemaTypes } from 'mongoose';
import { Board } from 'src/board/board.schema';

export type SiteContactDocument = SiteContact & Document;

@Schema()
export class SiteContact {
  @Prop()
  phoneNo: number;

  @Prop()
  emailId: string;

  @Prop()
  officeAddress: string;
}

export const SiteContactSchema = SchemaFactory.createForClass(SiteContact);
