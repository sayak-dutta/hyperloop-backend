import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { TestimonialService } from './testimonial.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TestimonialCreateDto, TestimonialUpdateDTO } from './testimonial.dto';

@Controller('testimonial')
export class TestimonialController {
  constructor(private readonly playerService: TestimonialService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const testimonial = await this.testimonialService.findOneById(id);
    if (!testimonial) {
      throw new NotFoundException();
    }
    return testimonial;
  }

  @Post()
  async create(@Body() testimonialDocument: TestimonialCreateDto) {
    try {
      const testimonial = await (
        await this.testimonialService.create(testimonialDocument)
      ).save();
      return testimonial.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() testimonialDocument: TestimonialUpdateDTO) {
    const testimonial = await this.testimonialService.update(id, testimonialDocument);
    if (!testimonial) {
      throw new NotFoundException();
    }
    return testimonial;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const testimonial = await this.testimonialService.remove(id);
    if (!testimonial) {
      throw new NotFoundException();
    }
    return testimonial;
  }
}

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialService: TestimonialService) {}

  @Get()
  async findAll() {
    const testimonials = await this.testimonialService.findAll();
    if (!testimonials) {
      throw new NotFoundException();
    }
    return testimonials;
  }
}
