import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AboutCreateDto {
  @IsMongoId()
  @IsNotEmpty()
  shortDescription: string;

  @IsMongoId()
  @IsNotEmpty()
  longDescription: string;

  @IsMongoId()
  @IsNotEmpty()
  featureImage: string;

  @IsMongoId()
  @IsNotEmpty()
  bannerImage: string;

}

export class AboutUpdateDTO extends PartialType(AboutCreateDto) {}
