import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealtcheckStatus } from './commun/interfaces/HealtcheckStatus';

@Controller('api/healtcheck')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getHello(): HealtcheckStatus {
    return this.appService.getHello();
  }
}
