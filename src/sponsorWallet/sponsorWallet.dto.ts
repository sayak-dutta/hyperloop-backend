import { PartialType } from "@nestjs/mapped-types";
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SponsorWalletCreateDTO{
    @IsMongoId()
    @IsNotEmpty()
    user_id: string;

    @IsNumber()
    @IsNotEmpty()
    balance: number;
}

export class SponsorWalletUpdateDTO extends PartialType(SponsorWalletCreateDTO){};

export class SponsorWalletTransactionCreateDTO{
    @IsString()
    @IsNotEmpty()
    transactionId: string;

    @IsMongoId()
    @IsNotEmpty()
    sponsorWalletId: string;

    @IsNotEmpty()
    @IsString()
    transactionDate: string;

    @IsNotEmpty()
    @IsString()
    transactionTime: string;

    @IsString()
    @IsNotEmpty()
    transactionAmount: string;

    @IsNotEmpty()
    @IsString()
    transactionType: string;

    @IsNotEmpty()
    @IsString()
    transactionState: string;
}

export class SponsorWalletTransactionUpdateDTO extends PartialType(SponsorWalletTransactionCreateDTO){};
