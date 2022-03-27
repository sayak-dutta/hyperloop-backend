import { IsMongoId, IsNotEmpty, IsString } from "class-validator";


export class SponsorCreateDTO {
    @IsMongoId()
    @IsNotEmpty()
    user_id: string;

    @IsMongoId()
    @IsNotEmpty()
    sponsor: string;

    @IsString()
    type: string;

    @IsString()
    status: string;
}