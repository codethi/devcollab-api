import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserFromJwtDTO } from '../dtos/UserFromJwtDTO';
import { UserPayloadDTO } from '../dtos/UserPayloadDTO';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: UserPayloadDTO): Promise<UserFromJwtDTO> {
    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
    };
  }
}
