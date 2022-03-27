import { Injectable } from "@nestjs/common";
import { OTP, OTPDocument } from "./otp.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import sendOTP from '../sendSMS';
import { OTPCreateDto } from "./otp.dto";


export class OTPService {
    constructor(@InjectModel(OTP.name) private otpModel: Model<OTPDocument>){};

    async list(): Promise<any>{
        return this.otpModel.find().lean().exec();
    }

    async findOneById(mobile_no:string): Promise<any>{
        return this.otpModel.find({"mobile_no": mobile_no});
    }

    async create(otpDocument: OTPCreateDto): Promise<any>{
        otpDocument.otp = Math.floor(1000 + Math.random() * 9000);
        console.log(otpDocument);
        if((await this.otpModel.find({"phone_no": otpDocument.phone_no})).length>0){
            await this.otpModel.findOneAndUpdate({"phone_no": otpDocument.phone_no}, otpDocument, {returnDocument: 'after'});
            sendOTP(otpDocument);
            return {
                "status":"Success"
            }
        }
        else{
            await new this.otpModel(otpDocument).save();
            sendOTP(otpDocument);
            return {
                'status':'Success',
            }
        }
    }


    async verifyOTP(otpDocument: OTPCreateDto): Promise<any>{
        const otp = await this.otpModel.findOne({"phone_no": otpDocument.phone_no}).exec();
        if(otp.otp ==  otpDocument.otp){
            return {
                'status': 'success'
            }
        }
        else{
            return {
                'status': 'fail'
            }
        }
    }

    // async update(mobile_no: string, otpDocument:any): Promise<any>{
    //     return this.otpModel.findByIdAndUpdate(mobile_no, otpDocument);
    // }

    // async remove(mobile_no: string): Promise<any>{
    //     return this.otpModel.findByIdAndRemove(id).exec();
    // }

}