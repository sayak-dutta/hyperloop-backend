import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.schema';
import { SchemaTypes, Document } from 'mongoose';

export type SponsorDocument = Sponsor & Document;

@Schema()
export class Sponsor {
  @Prop({
    ref: User.name,
    type: SchemaTypes.ObjectId,
  })
  user: string;

  @Prop({
    ref: User.name,
    type: SchemaTypes.ObjectId,
  })
  sponsor: string;

  @Prop()
  type: string;

  @Prop()
  status: string;
}

export const SponsorSchema = SchemaFactory.createForClass(Sponsor);
