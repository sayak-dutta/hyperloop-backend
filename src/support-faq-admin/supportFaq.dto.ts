import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class SupportFaqCreateDto {
  @IsNotEmpty()
  questionFaq: string;

  @IsNotEmpty()
  answerFaq: string;
}

export class SupportFaqUpdateDTO extends PartialType(SupportFaqCreateDto) {}
