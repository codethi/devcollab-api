import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Users } from '@prisma/client';
import { AuthRequestDTO } from '../dtos/AuthRequestDTO';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Users => {
    const request = context.switchToHttp().getRequest<AuthRequestDTO>();

    return request.user;
  },
);
