import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { ServiceSettingsAdminService } from './serviceSettingsAdmin.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {
  ServiceSettingsAdminCreateDto,
  ServiceSettingsAdminUpdateDTO,
} from './serviceSettingsAdmin.dto';

@Controller('serviceSettingsAdmin')
export class ServiceSettingsAdminController {
  constructor(
    private readonly serviceSettingsAdminService: ServiceSettingsAdminService,
  ) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const serviceSettingsAdmin =
      await this.serviceSettingsAdminService.findOneById(id);
    if (!serviceSettingsAdmin) {
      throw new NotFoundException();
    }
    return serviceSettingsAdmin;
  }

  @Post()
  async create(
    @Body() serviceSettingsAdminDocument: ServiceSettingsAdminCreateDto,
  ) {
    try {
      const serviceSettingsAdmin = await (
        await this.serviceSettingsAdminService.create(
          serviceSettingsAdminDocument,
        )
      ).save();
      return serviceSettingsAdmin.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(
    @Param() { id },
    @Body() serviceSettingsAdminDocument: ServiceSettingsAdminUpdateDTO,
  ) {
    const serviceSettingsAdmin = await this.serviceSettingsAdminService.update(
      id,
      serviceSettingsAdminDocument,
    );
    if (!serviceSettingsAdmin) {
      throw new NotFoundException();
    }
    return serviceSettingsAdmin;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const serviceSettingsAdmin = await this.serviceSettingsAdminService.remove(
      id,
    );
    if (!serviceSettingsAdmin) {
      throw new NotFoundException();
    }
    return serviceSettingsAdmin;
  }
}

@Controller('serviceSettingsAdmin2')
export class ServiceSettingsAdminControllers {
  constructor(
    private readonly serviceSettingsAdminService: ServiceSettingsAdminService,
  ) {}

  @Get()
  async findAll() {
    const serviceSettingsAdmin =
      await this.serviceSettingsAdminService.findAll();
    if (!serviceSettingsAdmin) {
      throw new NotFoundException();
    }
    return serviceSettingsAdmin;
  }
}
