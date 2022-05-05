import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { PrivacyService } from './privacy.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrivacyCreateDto, PrivacyUpdateDTO } from './privacy.dto';

@Controller('privacy')
export class PrivacyController {
  constructor(private readonly privacyService: PrivacyService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const privacy = await this.privacyService.findOneById(id);
    if (!privacy) {
      throw new NotFoundException();
    }
    return privacy;
  }

  @Post()
  async create(@Body() privacyDocument: PrivacyCreateDto) {
    try {
      const privacy = await (
        await this.privacyService.create(privacyDocument)
      ).save();
      return privacy.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() privacyDocument: PrivacyUpdateDTO) {
    const privacy = await this.privacyService.update(id, privacyDocument);
    if (!privacy) {
      throw new NotFoundException();
    }
    return privacy;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const privacy = await this.privacyService.remove(id);
    if (!privacy) {
      throw new NotFoundException();
    }
    return privacy;
  }
}

@Controller('privacy_policy')
export class PrivacyPolicyController {
  constructor(private readonly privacyService: PrivacyService) {}

  @Get()
  async findAll() {
    const privacy_policy = await this.privacyService.findAll();
    if (!privacy_policy) {
      throw new NotFoundException();
    }
    return privacy_policy;
  }
}
