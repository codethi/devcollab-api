import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { IsPublic } from 'src/modules/auth/decorators/is-public.decorator';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @IsPublic()
  @Post()
  async handle(@Body() body: CreateUserDto) {
    try {
      const data = body;
      return await this.createUserService.execute(data);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
