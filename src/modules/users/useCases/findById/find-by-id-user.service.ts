import { Users } from '@prisma/client';
import { UserRepository } from '../../repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindByIdUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<Omit<Users, 'password'>> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error('User not found!');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
