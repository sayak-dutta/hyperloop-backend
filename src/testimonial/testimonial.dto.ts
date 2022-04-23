import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class TestimonialCreateDto {
  @IsNotEmpty()
  @IsString()
  customerImage: string;

  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsString()
  customerCountry: string;

  @IsNotEmpty()
  @IsString()
  customerReview: string;
}

export class TestimonialUpdateDto extends PartialType(TestimonialCreateDto) {}
