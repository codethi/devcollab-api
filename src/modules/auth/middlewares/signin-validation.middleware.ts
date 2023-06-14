import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';
import { SigninRequestBodyDTO } from '../dtos/SigninRequestBodyDTO';

@Injectable()
export class SigninValidationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    const signinRequestBody = new SigninRequestBodyDTO();
    signinRequestBody.email = body.email;
    signinRequestBody.password = body.password;

    const validations = await validate(signinRequestBody);

    if (validations.length) {
      throw new BadRequestException(
        validations.reduce((acc, curr) => {
          return [...acc, ...Object.values(curr.constraints)];
        }, []),
      );
    }

    next();
  }
}
