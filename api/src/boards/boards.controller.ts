import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import type { AuthRequest } from 'src/auth/auth.interface';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.create(createBoardDto);
  }

  @Get()
  findAllByOwner(@Request() req: AuthRequest) {
    return this.boardsService.findAllByOwner(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: ParseIntPipe) {
    return this.boardsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: ParseIntPipe,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardsService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ParseIntPipe) {
    return this.boardsService.remove(+id);
  }
}
