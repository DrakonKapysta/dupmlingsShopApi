import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dish, DishSchema } from './schemas/dish.schema';
import { FileService } from '../file/file.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dish.name, schema: DishSchema }]),
  ],
  providers: [DishService, FileService],
  controllers: [DishController],
})
export class DishModule {}
