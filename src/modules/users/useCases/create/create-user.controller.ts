import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async handle(@Body() body: CreateUserDto) {
    const data = body;
    return await this.createUserService.execute(data);
  }
}
