import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { OTPCreateDto, OTPUpdateDTO } from "./otp.dto";
import { OTPService } from "./otp.service";


@Controller('otp')
export class OTPController{
    constructor(private readonly otpService: OTPService){};
    
    @Get(':mobile_no')
    async findOne(@Param() { mobile_no }){
        const otp =  this.otpService.findOneById(mobile_no);
        if(!otp){
            throw new NotFoundException();
        }
        return otp;
    }

    @Post()
    async create(@Body() otpDocument: OTPCreateDto){
        try{
            const otp = await this.otpService.create(otpDocument);
            return otp;
        }catch(e){
            throw e;
        }
    }

    // @Patch(':id')
    // async update(@Param() { mobile_no }, @Body() otpDocument:OTPUpdateDTO){
    //     try{
    //         const otp = await this.otpService.update(mobile_no, otpDocument);
    //         return otp.toJSON();
    //     }
    //     catch(e){
    //         throw e;
    //     }
    // }


    // @Delete(':id')
    // async remove(@Param() {mobile_no}){
    //     try{
    //         const otp = await this.otpService.remove(mobile_no);
    //         return otp.toJSON();
    //     }
    //     catch(e){
    //         throw e;
    //     }
    // }
}

@Controller('otp/verify')
export class VerifyOTPController{
    constructor(private readonly otpService: OTPService){};
    @Post()
    async verifyOTP(@Body() otpDocument: OTPCreateDto){
        return this.otpService.verifyOTP(otpDocument);
    }
}
@Controller()
export class OTPsController{

}