import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import type { JwtPayload } from './jwt-payload.interface';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() signinUserDto: SigninUserDto) {
    return this.authService.signin(signinUserDto);
  }

  @Get('profile')
  getProfile(@Request() req: { user: JwtPayload }): JwtPayload {
    return req.user;
  }
}
