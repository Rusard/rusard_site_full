import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDownloadDto {
  @IsString()
  @MaxLength(140)
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  fileName!: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  fileSize?: number;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
