import { Users } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';

export abstract class UserRepository {
  abstract create(data: CreateUserDto): Promise<void>;
  abstract findAll(): Promise<Users[]>;
  abstract findById(id: number): Promise<Users>;
}
