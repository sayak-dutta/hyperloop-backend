import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PlayerCreateDto {
  @IsMongoId()
  @IsNotEmpty()
  customerImage: string;

  @IsMongoId()
  @IsNotEmpty()
  customerName: string;

  @IsMongoId()
  @IsNotEmpty()
  customerCountry: string;

  @IsMongoId()
  @IsNotEmpty()
  customerReview: string;

  
}

export class PlayerUpdateDTO extends PartialType(PlayerCreateDto) {}
