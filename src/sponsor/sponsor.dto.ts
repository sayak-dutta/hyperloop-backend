import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SponsorCreateDTO {
  @IsMongoId()
  @IsNotEmpty()
  user_id: string;

  @IsMongoId()
  @IsNotEmpty()
  sponsor: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  status: string;
}

export class SponsorUpdateDTO extends PartialType(SponsorCreateDTO) {}
