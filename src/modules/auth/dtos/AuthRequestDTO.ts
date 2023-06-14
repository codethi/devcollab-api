import { Users } from '@prisma/client';
import { Request } from 'express';

export interface AuthRequestDTO extends Request {
  user: Users;
}
