import { Controller, Get } from '@nestjs/common';
import { Users } from '@prisma/client';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';

@Controller('user')
export class UserLogged {
  @Get('me')
  findUserLogged(@CurrentUser() user: Users) {
    return user;
  }
}
