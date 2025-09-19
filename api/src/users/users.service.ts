import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '@prismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private readonly userPublicSelect = {
    id: true,
    email: true,
    name: true,
    createdAt: true,
    updatedAt: true,
  } as const;

  async findAll() {
    const users = await this.prisma.user.findMany({
      select: this.userPublicSelect,
    });

    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: this.userPublicSelect,
    });
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
        password: hashedPassword,
      },
    });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
    if (!updatePasswordDto.password || updatePasswordDto.password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }
    const hashedPassword = await bcrypt.hash(updatePasswordDto.password, 10);

    return this.prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
