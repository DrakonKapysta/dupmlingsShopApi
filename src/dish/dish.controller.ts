import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { ObjectId } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('dish')
export class DishController {
  constructor(private dishService: DishService) {}
  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  create(
    @Body() dto: CreateDishDto,
    @UploadedFile() picture: Express.Multer.File,
  ) {
    return this.dishService.create(dto, picture);
  }
  @Get()
  getAll() {
    return this.dishService.getAll();
  }
  @Get('/search')
  search(@Query('query') query: string) {
    return this.dishService.search(query);
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.dishService.getOne(id);
  }
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.dishService.delete(id);
  }
}
