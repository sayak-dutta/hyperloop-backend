import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BannerCreateDto {
  @IsNotEmpty()
  featureImage: string;

  @IsNotEmpty()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  type: number;
}

export class BannerUpdateDTO extends PartialType(BannerCreateDto) {}
