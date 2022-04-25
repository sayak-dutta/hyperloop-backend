import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Board } from 'src/board/board.schema';
import { User } from 'src/user/user.schema';


export type NewsDocument = News & Document;

@Schema()
export class News {
  @Prop()
  image: string;

  @Prop()
  description: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);
