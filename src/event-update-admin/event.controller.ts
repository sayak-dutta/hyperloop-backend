import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { EventService } from './event.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EventCreateDto, EventUpdateDTO } from './event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const event = await this.eventService.findOneById(id);
    if (!event) {
      throw new NotFoundException();
    }
    return event;
  }

  @Post()
  async create(@Body() eventDocument: EventCreateDto) {
    try {
      const event = await (
        await this.eventService.create(eventDocument)
      ).save();
      return event.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() eventDocument: EventUpdateDTO) {
    const event = await this.eventService.update(id, eventDocument);
    if (!event) {
      throw new NotFoundException();
    }
    return event;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const event = await this.eventService.remove(id);
    if (!event) {
      throw new NotFoundException();
    }
    return event;
  }
}

@Controller('event-all')
export class EventControllers {
  constructor(private readonly EventService: EventService) {}

  @Get()
  async findAll() {
    const event = await this.EventService.findAll();
    if (!event) {
      throw new NotFoundException();
    }
    return event;
  }
}
