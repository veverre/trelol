import { TaskStatus } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsEnum,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsNotEmpty()
  @IsInt()
  boardId: number;
}
