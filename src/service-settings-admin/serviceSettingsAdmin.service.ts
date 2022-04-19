import { InjectModel } from '@nestjs/mongoose';
import { ServiceSettingsAdmin, ServiceSettingsAdminDocument } from './ServiceSettingsAdmin.schema';
import { Model } from 'mongoose';

export class ServiceSettingsAdminService {
  constructor(
    @InjectModel(ServiceSettingsAdmin.name) private ServiceSettingsAdminModel: Model<ServiceSettingsAdminDocument>,
  ) {}

  async findOneById(id: string) {
    return await this.ServiceSettingsAdminModel.findById(id);
  }

  async findAll() {
    return await this.ServiceSettingsAdminModel.find().lean().exec();
  }

  async create(ServiceSettingsAdminDocument: any): Promise<any> {
    return new this.ServiceSettingsAdminModel(ServiceSettingsAdminDocument).save();
  }

  async update(id: string, ServiceSettingsAdminDocument: any): Promise<any> {
    return this.ServiceSettingsAdminModel.findByIdAndUpdate(id, ServiceSettingsAdminDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.ServiceSettingsAdminModel.findByIdAndDelete(id);
  }
}
