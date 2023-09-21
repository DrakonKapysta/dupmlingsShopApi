import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppProvider } from './app.provider';

@Module({
  controllers: [AppController],
  providers: [AppProvider],
})
export class AppModule {}
