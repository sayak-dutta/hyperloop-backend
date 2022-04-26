import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class EventCreateDto{
    @IsMongoId()
    @IsNotEmpty()
    eventImage: string;

    @IsMongoId()
    @IsNotEmpty()
    eventDescription: string;
}

export class EventUpdateDTO extends PartialType(EventCreateDto) {}
