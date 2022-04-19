import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from 'mongoose';


export type ServiceSettingsAdminDocument = ServiceSettingsAdmin & Document;

@Schema()
export class ServiceSettingsAdmin {
    @Prop()
    icon: string;

   
    @Prop()
    featured_image: string;

    @Prop()
    short_description: string;

    @Prop()
    long_description: string;
}

export const ServiceSettingsAdminSchema = SchemaFactory.createForClass(ServiceSettingsAdmin);