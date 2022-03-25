import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OTPDocument = OTP & Document;

@Schema({
    timestamps: true
})
export class OTP{
    @Prop()
    otp: string;

    @Prop()
    phone_no: string;

    @Prop()
    count: number;
}

export const OTPSchema = SchemaFactory.createForClass(OTP);