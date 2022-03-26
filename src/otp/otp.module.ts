import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { OTPController, VerifyOTPController } from "./otp.controller";
import { OTP, OTPSchema } from "./otp.schema";
import { OTPService } from "./otp.service";


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: OTP.name,
                schema: OTPSchema
            }
        ])
    ],
    providers: [OTPService],
    controllers: [OTPController, VerifyOTPController],
    exports: [OTPService]
})
export class OTPModule {};
