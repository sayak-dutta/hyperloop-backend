import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AboutCreateDto {
  @IsNotEmpty()
  shortDescription: string;

  @IsNotEmpty()
  longDescription: string;

  @IsNotEmpty()
  featureImage: string;

  @IsNotEmpty()
  bannerImage: string;

  @IsNumber()
  userCount: number;

  @IsString()
  promoVideo: string;
}

export class AboutUpdateDTO extends PartialType(AboutCreateDto) {}
