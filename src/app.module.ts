import { Module } from '@nestjs/common';
import { DishModule } from './dish/dish.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    DishModule,
    MongooseModule.forRoot(
      'mongodb+srv://matyiokin:EKvU5KjkBxDjCMcN@dishshop.d9fqb4o.mongodb.net/?retryWrites=true&w=majority',
    ),
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
  ],
})
export class AppModule {}
