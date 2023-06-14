import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FindByIdUserService } from './find-by-id-user.service';
import { Users } from '@prisma/client';

@Controller('users')
export class FindByIdUserController {
  constructor(private findByIdUserService: FindByIdUserService) {}

  @Get(':id')
  async handle(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Omit<Users, 'password'>> {
    try {
      return await this.findByIdUserService.execute(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
