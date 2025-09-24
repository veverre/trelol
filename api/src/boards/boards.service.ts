import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PrismaService } from '@prismaService';

@Injectable()
export class BoardsService {
  constructor(private prisma: PrismaService) {}

  create(createBoardDto: CreateBoardDto) {
    return this.prisma.board.create({
      data: {
        title: createBoardDto.title,
        description: createBoardDto.description,
        ownerId: createBoardDto.ownerId,
      },
    });
  }

  findAll() {
    return this.prisma.board.findMany();
  }

  findOne(id: number) {
    return this.prisma.board.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateBoardDto,
    });
  }

  remove(id: number) {
    return this.prisma.board.delete({
      where: { id },
    });
  }
}
