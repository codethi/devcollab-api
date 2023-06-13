import { Users } from '@prisma/client';
import { PrismaService } from '../../../../database/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<void> {
    await this.prisma.users.create({ data: data });
  }

  async findAll(): Promise<Users[]> {
    return await this.prisma.users.findMany({});
  }

  async findById(id: number): Promise<Users> {
    return await this.prisma.users.findFirst({ where: { id } });
  }

  async findByEmail(email: string): Promise<Users> {
    return await this.prisma.users.findFirst({ where: { email } });
  }
}
