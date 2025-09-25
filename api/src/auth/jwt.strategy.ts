import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { JwtPayload } from './jwt-payload.interface';
import { Request as ExpressRequest } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    interface RequestWithCookies extends ExpressRequest {
      cookies: { [key: string]: string };
    }
    super({
      jwtFromRequest: (req: RequestWithCookies) => req?.cookies?.['jwt'],
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret ?? '',
    });
  }

  validate(payload: JwtPayload) {
    return {
      id: Number(payload.sub),
      email: payload.email,
      name: payload.name,
    };
  }
}
