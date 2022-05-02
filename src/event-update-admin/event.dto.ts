import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';


export class EventCreateDto {
  @IsNotEmpty()
  eventImage: string;

  @IsNotEmpty()
  eventDescription: string;

  @IsNotEmpty()
  eventDate: string;

  @IsNotEmpty()
  eventHeading: string;
}

export class EventUpdateDTO extends PartialType(EventCreateDto) {}
