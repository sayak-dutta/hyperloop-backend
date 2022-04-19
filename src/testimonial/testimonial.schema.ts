import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/user/user.schema";
import { Document, SchemaTypes } from 'mongoose';
import { Board } from "src/board/board.schema";


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