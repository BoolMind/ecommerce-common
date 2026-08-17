import {
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

import { Transform } from 'class-transformer';

export class PaginationDto {
  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsPositive()
  page = 1;

  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsPositive()
  limit = 10;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  orderBy?: string;

  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  order?: 'ASC' | 'DESC' = 'DESC';
}
