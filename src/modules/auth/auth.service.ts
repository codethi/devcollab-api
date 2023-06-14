import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { Users } from '@prisma/client';
import { UserPayloadDTO } from './dtos/UserPayloadDTO';
import { UserTokenDTO } from './dtos/UserTokenDTO';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('Email address or password provided is incorrect.');
  }

  async signin(user: Users): Promise<UserTokenDTO> {
    const payload: UserPayloadDTO = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
