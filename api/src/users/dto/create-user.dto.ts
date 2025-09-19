import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  name: string;
}
