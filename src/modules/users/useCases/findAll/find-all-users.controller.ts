import { Controller, Get } from '@nestjs/common';
import { FindAllUsersService } from './find-all-users.service';
import { Users } from '@prisma/client';

@Controller('users')
export class FindAllUsersController {
  constructor(private findAllUsersService: FindAllUsersService) {}

  @Get()
  async handle(): Promise<Omit<Users, 'password'>[]> {
    const users = await this.findAllUsersService.execute();
    return users;
  }
}
