import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserRepository } from '../../repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDto) {
    const passwordHash = await bcrypt.hash(data.password, 10);
    await this.userRepository.create({
      ...data,
      password: passwordHash,
    });
  }
}
