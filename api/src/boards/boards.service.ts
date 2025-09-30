import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PrismaService } from '@prismaService';

@Injectable()
export class BoardsService {
  constructor(private prisma: PrismaService) {}

  async create(createBoardDto: CreateBoardDto) {
    return this.prisma.board.create({
      data: {
        title: createBoardDto.title,
        description: createBoardDto.description,
        ownerId: createBoardDto.ownerId,
      },
    });
  }

  async findAll() {
    return this.prisma.board.findMany();
  }

  async findAllByOwner(userId: number) {
    return this.prisma.board.findMany({
      where: { ownerId: userId },
    });
  }

  async findOne(id: number) {
    return this.prisma.board.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateBoardDto,
    });
  }

  async remove(id: number) {
    return this.prisma.board.delete({
      where: { id },
    });
  }
}
