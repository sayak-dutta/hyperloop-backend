import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventController, EventControllers } from './event.controller';
import { Event, EventSchema } from './event.schema';
import { EventService } from './event.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  providers: [EventService],
  controllers: [EventController, EventControllers],
  exports: [EventService],
})
export default class EventModule {}
