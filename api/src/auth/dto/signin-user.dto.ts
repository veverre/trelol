import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class SigninUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
