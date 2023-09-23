import { Controller, Get, Param, Res } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as process from 'process';

@Controller('file')
export class FileController {
  @Get(':fileName')
  getFile(@Param('fileName') fileName: string, @Res() response: Response) {
    const file = fs.createReadStream(path.join(process.cwd(), fileName));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    file.pipe(response);
  }
}
