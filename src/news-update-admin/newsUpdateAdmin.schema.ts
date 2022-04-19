import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from 'mongoose';

export type NewsDocument = News & Document;

@Schema()
export class News{
    @Prop()
    image: string;
    
    @Prop()
    description : string;
}

export const NewsSchema = SchemaFactory.createForClass(News);