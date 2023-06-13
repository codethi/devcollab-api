import { Users } from '@prisma/client';
import { UserRepository } from '../../repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllService {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<Omit<Users, 'password'>[]> {
    const users = await this.userRepository.findAll();
    const usersWithoutPassword = users.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
    return usersWithoutPassword;
  }
}
