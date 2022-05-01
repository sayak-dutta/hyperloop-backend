import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BannerCreateDto {
  @IsMongoId()
  @IsNotEmpty()
  featureImage: string;

  @IsMongoId()
  @IsNotEmpty()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  type: number;


}

export class BannerUpdateDTO extends PartialType(BannerCreateDto) {}
