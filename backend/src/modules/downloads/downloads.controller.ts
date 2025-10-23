import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateDownloadDto } from './dto/create-download.dto';
import { UpdateDownloadDto } from './dto/update-download.dto';
import { DownloadsService } from './downloads.service';

@Controller('downloads')
export class DownloadsController {
  constructor(private readonly downloadsService: DownloadsService) {}

  @Get()
  findAll() {
    return this.downloadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.downloadsService.findOne(id);
  }

  @Get(':id/url')
  getDownloadUrl(@Param('id') id: string) {
    return this.downloadsService.getDownloadUrl(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createDownloadDto: CreateDownloadDto) {
    return this.downloadsService.create(createDownloadDto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateDownloadDto: UpdateDownloadDto) {
    return this.downloadsService.update(id, updateDownloadDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.downloadsService.remove(id);
  }
}
