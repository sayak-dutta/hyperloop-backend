import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    gender: string;

    @Prop()
    email: string;

    @Prop()
    mobile_no: string;

    @Prop()
    password: string;

    @Prop()
    country: string;

    @Prop({
        ref: User.name,
        type: SchemaTypes.ObjectId
    })
    sponsor: string;
} 

export const UserSchema = SchemaFactory.createForClass(User);
