import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { OTP, OTPSchema } from "./otp.schema";


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: OTP.name,
                schema: OTPSchema
            }
        ])
    ],
    providers: [],
    controllers: [],
    exports: []
})
export class OTPModule {};
