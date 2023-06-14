import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserController } from './useCases/create/create-user.controller';
import { CreateUserService } from './useCases/create/create-user.service';
import { UserRepository } from './repositories/user.repository';
import { PrismaUserRepository } from './repositories/implementations/prisma-user.repository';
import { FindAllUsersController } from './useCases/findAll/find-all-users.controller';
import { FindAllUsersService } from './useCases/findAll/find-all-users.service';
import { FindByIdUserController } from './useCases/findById/find-by-id-user.controller';
import { FindByIdUserService } from './useCases/findById/find-by-id-user.service';
import { UserLogged } from './useCases/userLogged/user-logged.controller';

@Module({
  controllers: [
    CreateUserController,
    FindAllUsersController,
    FindByIdUserController,
    UserLogged,
  ],
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    CreateUserService,
    FindAllUsersService,
    FindByIdUserService,
  ],
  exports: [UserRepository],
})
export class UsersModule {}
