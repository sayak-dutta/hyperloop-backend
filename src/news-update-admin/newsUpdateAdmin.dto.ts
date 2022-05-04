import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class NewsCreateDto{

    @IsNotEmpty()
    image: string;

 
    @IsNotEmpty()
    description: string;


    @IsNotEmpty()
    newsHeading: string;


    @IsNotEmpty()
    newsDate: string;
}

export class NewsUpdateDTO extends PartialType(NewsCreateDto) {}
