import { jest } from '@jest/globals';
import * as bcrypt from 'bcrypt';
import { PrismaUserRepository } from '../../repositories/implementations/prisma-user.repository';
import { PrismaService } from '../../../../database/prisma.service';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';

describe('Create User', () => {
  it('Should create one user with hash password', async () => {
    const data: CreateUserDto = {
      name: 'Thiago',
      email: 'thi@gmail.com',
      password: '123456',
    };
    jest.spyOn(bcrypt, 'hash').mockImplementation(() => {
      return 'hashpassword';
    });

    const prisma = new PrismaService();
    const userRepository = new PrismaUserRepository(prisma);
    const spyUserRespository = jest
      .spyOn(userRepository, 'create')
      .mockResolvedValue();

    const createUserService = new CreateUserService(userRepository);

    await createUserService.execute(data);

    expect(spyUserRespository).toHaveBeenCalledWith({
      name: 'Thiago',
      email: 'thi@gmail.com',
      password: expect.any(String),
    });
  });
});
