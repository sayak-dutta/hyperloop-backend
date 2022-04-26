import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Board } from 'src/board/board.schema';
import { User } from 'src/user/user.schema';


export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  eventImage: string;

  @Prop()
  eventDescription: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
