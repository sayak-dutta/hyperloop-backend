import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.schema';
import { Document, SchemaTypes } from 'mongoose';
import { Board } from 'src/board/board.schema';

export type AboutDocument = About & Document;

@Schema()
export class About {
  @Prop()
  shortDescription: string;

  @Prop()
  longDescription: string;

  @Prop()
  featureImage: string;

  @Prop()
  bannerImage: string;

  @Prop()
  userCount: number;

  @Prop()
  promoVideo: string;
}

export const AboutSchema = SchemaFactory.createForClass(About);
