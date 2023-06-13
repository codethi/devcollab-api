import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserController } from './useCases/create/create-user.controller';
import { CreateUserService } from './useCases/create/create-user.service';
import { UserRepository } from './repositories/user.repository';
import { PrismaUserRepository } from './repositories/implementations/prisma-user.repository';

@Module({
  controllers: [CreateUserController],
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    CreateUserService,
  ],
})
export class UsersModule {}
