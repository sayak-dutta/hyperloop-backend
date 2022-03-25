import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class OTPCreateDto {
    @IsString()
    @IsNotEmpty()
    otp: string;

    @IsString()
    @IsNotEmpty()
    phone_no: string;

    @IsNumber()
    @IsNotEmpty()
    count: number;
}

export class OTPUpdateDTO extends PartialType(OTPCreateDto) {};