import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppController {
  @Get()
  getUsers() {
    return [
      { id: 1, name: 'Tomas' },
      { id: 2, name: 'Oleg' },
      { id: 3, name: 'Franky' },
      { id: 4, name: 'Kolya' },
    ];
  }
}
