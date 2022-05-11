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

  @IsNotEmpty()
  userCount: number;

  @IsNotEmpty()
  promoVideo: string;
}

export class AboutUpdateDTO extends PartialType(AboutCreateDto) {}
