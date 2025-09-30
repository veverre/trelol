import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import express from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { Public } from '../public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private setJwtCookie(res: express.Response, token: string) {
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24, // 1 jour
    });
  }

  @Public()
  @Post('signup')
  async signup(
    @Res({ passthrough: true }) res: express.Response,
    @Body() createUserDto: CreateUserDto,
  ) {
    const token = await this.authService.signup(createUserDto);

    this.setJwtCookie(res, token);

    return { message: 'Account created successfully' };
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(
    @Res({ passthrough: true }) res: express.Response,
    @Body() signinUserDto: SigninUserDto,
  ) {
    const token = await this.authService.signin(signinUserDto);

    this.setJwtCookie(res, token);

    return { message: 'Logged in successfully' };
  }

  @Post('signout')
  logout(@Res({ passthrough: true }) res: express.Response) {
    res.clearCookie('jwt');
    return { message: 'Logged out' };
  }
}
