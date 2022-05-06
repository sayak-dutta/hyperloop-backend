import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceSettingsAdminDocument = ServiceSettingsAdmin & Document;

@Schema()
export class ServiceSettingsAdmin {
  @Prop()
  serviceIcon: string;

  @Prop()
  serviceHeading: string;

  @Prop()
  serviceDescription: string;
}

export const ServiceSettingsAdminSchema =
  SchemaFactory.createForClass(ServiceSettingsAdmin);
