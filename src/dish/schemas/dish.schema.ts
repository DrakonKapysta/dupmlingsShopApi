import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DishDocument = HydratedDocument<Dish>;

@Schema()
export class Dish {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  caloric: number;

  @Prop()
  description: string;

  @Prop({type:{ data: Buffer, imageType:String }})
  picture: { data: Buffer, imageType:string };
}

export const DishSchema = SchemaFactory.createForClass(Dish);
