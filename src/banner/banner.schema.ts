import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.schema';
import { Document, SchemaTypes } from 'mongoose';
import { Board } from 'src/board/board.schema';

export type BannerDocument = Banner & Document;

@Schema()
export class Banner {
  
  
  @Prop()
  featureImage: string;

  @Prop()
  image: string;

  @Prop()
  type: string;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);
