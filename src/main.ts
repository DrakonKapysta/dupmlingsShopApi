import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

const start = async () => {
  const PORT = process.env.PORT || 3000;
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => console.log('Server started on port ' + PORT));
  } catch (e) {
    console.log(e);
  }
};
start();
