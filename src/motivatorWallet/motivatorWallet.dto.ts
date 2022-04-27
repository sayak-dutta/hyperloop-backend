import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MotivatorWalletCreateDTO {
  @IsMongoId()
  @IsNotEmpty()
  user_id: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;
}

export class MotivatorWalletUpdateDTO extends PartialType(
  MotivatorWalletCreateDTO,
) {}

export class MotivatorWalletTransactionCreateDTO {
  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @IsMongoId()
  @IsNotEmpty()
  MotivatorWalletId: string;

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

export class MotivatorWalletTransactionUpdateDTO extends PartialType(
  MotivatorWalletTransactionCreateDTO,
) {}
