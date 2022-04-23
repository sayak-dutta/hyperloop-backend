import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ServiceSettingsAdminController,
  ServiceSettingsAdminControllers,
} from './serviceSettingsAdmin.controller';
import {
  ServiceSettingsAdmin,
  ServiceSettingsAdminSchema,
} from './serviceSettingsAdmin.schema';
import { ServiceSettingsAdminService } from './serviceSettingsAdmin.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ServiceSettingsAdmin.name,
        schema: ServiceSettingsAdminSchema,
      },
    ]),
  ],
  providers: [ServiceSettingsAdminService],
  controllers: [
    ServiceSettingsAdminController,
    ServiceSettingsAdminControllers,
  ],
  exports: [ServiceSettingsAdminService],
})
export default class ServiceSettingsAdminModule {}
