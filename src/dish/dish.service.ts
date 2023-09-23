import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dish, DishDocument } from './schemas/dish.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateDishDto } from './dto/create-dish.dto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class DishService {
  constructor(
    @InjectModel(Dish.name) private dishModel: Model<DishDocument>,
    private fileService: FileService,
  ) {}
  async create(
    dto: CreateDishDto,
    picture: Express.Multer.File,
  ): Promise<Dish> {
    const filePath = this.fileService.createFile(FileType.IMAGE, picture);
    const dish = await this.dishModel.create({ ...dto, picture: filePath });
    return dish;
  }
  async getAll(): Promise<Dish[]> {
    const allDishes = await this.dishModel.find();
    return allDishes;
  }
  async getOne(id: ObjectId): Promise<Dish> {
    const dish = this.dishModel.findById(id);
    return dish;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const deletedDish = await this.dishModel.findByIdAndDelete(id);
    return deletedDish.id;
  }

  async search(query: string): Promise<Dish[]> {
    const searchedDishes = await this.dishModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
    return searchedDishes;
  }
}
