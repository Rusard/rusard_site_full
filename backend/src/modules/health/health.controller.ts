import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'health' })
export class HealthController {
  @Get()
  getStatus() {
    return {
      status: 'ok',
      uptime: process.uptime()
    };
  }
}
