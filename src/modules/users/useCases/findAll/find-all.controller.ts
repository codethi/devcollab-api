import { Controller, Get } from '@nestjs/common';
import { FindAllService } from './find-all.service';

@Controller('users')
export class FindAllController {
  constructor(private findAllService: FindAllService) {}

  @Get()
  async handle() {
    const users = await this.findAllService.execute();
    return users;
  }
}
