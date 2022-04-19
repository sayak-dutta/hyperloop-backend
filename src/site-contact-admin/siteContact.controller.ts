import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { SiteContactService } from './SiteContact.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SiteContactCreateDto, SiteContactUpdateDTO } from './siteContact.dto';

@Controller('siteContact')
export class SiteContactController {
  constructor(private readonly siteContactService: SiteContactService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const siteContact = await this.siteContactService.findOneById(id);
    if (!siteContact) {
      throw new NotFoundException();
    }
    return siteContact;
  }

  @Post()
  async create(@Body() siteContactDocument: SiteContactCreateDto) {
    try {
      const siteContact = await (
        await this.siteContactService.create(siteContactDocument)
      ).save();
      return siteContact.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() siteContactDocument: SiteContactUpdateDTO) {
    const siteContact = await this.siteContactService.update(id, siteContactDocument);
    if (!siteContact) {
      throw new NotFoundException();
    }
    return siteContact;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const siteContact = await this.siteContactService.remove(id);
    if (!siteContact) {
      throw new NotFoundException();
    }
    return siteContact;
  }
}

@Controller('siteContacts')
export class SiteContactsController {
  constructor(private readonly siteContactService: SiteContactService) {}

  @Get()
  async findAll() {
    const siteContacts = await this.siteContactService.findAll();
    if (!siteContacts) {
      throw new NotFoundException();
    }
    return siteContacts;
  }
}
