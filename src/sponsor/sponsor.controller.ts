import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import e from 'express';
import { SponsorDocument } from './sponsor.schema';
import { SponsorUpdateDTO } from './sponsor.dto';
import { SponsorService } from './sponsor.service';

@Controller('sponsor')
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const sponsor = await this.sponsorService.findOneById(id);
    if (!sponsor) {
      throw new NotFoundException();
    }
    return sponsor;
  }
  @Post()
  async create(@Body() sponsorDocument: SponsorDocument) {
    try {
      const sponsor = await (
        await this.sponsorService.create(sponsorDocument)
      ).save();
      return sponsor.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
    }
    throw e;
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() sponsorDocument: SponsorUpdateDTO) {
    const sponsor = await this.sponsorService.update(id, sponsorDocument);
    if (!sponsor) {
      throw new NotFoundException();
    }
    return sponsor;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const sponsor = await this.sponsorService.remove(id);
    if (!sponsor) {
      throw new NotFoundException();
    }
    return sponsor;
  }
}

@Controller('sponsors')
export class SponsorsController {
  constructor(private readonly sponsorService: SponsorService) {}
  @Get()
  async findAll() {
    const sponsors = await this.sponsorService.findAll();
    if (!sponsors) {
      throw new NotFoundException();
    }
    return sponsors;
  }
}
