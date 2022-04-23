import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceSettingsAdminDocument = ServiceSettingsAdmin & Document;

@Schema()
export class ServiceSettingsAdmin {
  @Prop()
  icon: string;

  @Prop()
  featuredImage: string;

  @Prop()
  shortDescription: string;

  @Prop()
  longDescription: string;
}

export const ServiceSettingsAdminSchema =
  SchemaFactory.createForClass(ServiceSettingsAdmin);
