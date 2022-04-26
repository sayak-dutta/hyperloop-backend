import { InjectModel } from '@nestjs/mongoose';
import { Event, EventDocument } from './event.schema';
import { Model } from 'mongoose';

export class EventService{
    constructor(
        @InjectModel(Event.name) private eventModel : Model<EventDocument>,
    ) {}

    async findOneById(id: string) {
        return await this.eventModel.findById(id);
      }
    
      async findAll() {
        return await this.eventModel.find().lean().exec();
      }
    
      async create(eventDocument: any): Promise<any> {
        return new this.eventModel(eventDocument).save();
      }
    
      async update(id: string, eventDocument: any): Promise<any> {
        return this.eventModel.findByIdAndUpdate(id, eventDocument, {
          returnDocument: 'after',
        });
      }
    
      async remove(id: string) {
        return this.eventModel.findByIdAndDelete(id);
      }
} 