import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { MinioService } from '../storage/storage.service';
import { CreateDownloadDto } from './dto/create-download.dto';
import { UpdateDownloadDto } from './dto/update-download.dto';
import { Download } from './entities/download.entity';

@Injectable()
export class DownloadsService {
  constructor(
    @InjectRepository(Download)
    private readonly downloadsRepository: Repository<Download>,
    private readonly minioService: MinioService
  ) {}

  async create(createDownloadDto: CreateDownloadDto) {
    const cleanFileName = createDownloadDto.fileName.replace(/\s+/g, '-').toLowerCase();
    const fileKey = `${uuidv4()}-${cleanFileName}`;
    const uploadUrl = await this.minioService.getPresignedUploadUrl(fileKey);

    const download = this.downloadsRepository.create({
      title: createDownloadDto.title,
      description: createDownloadDto.description,
      fileKey,
      fileName: createDownloadDto.fileName,
      fileSize: createDownloadDto.fileSize,
      isPublic: createDownloadDto.isPublic ?? true
    });

    const saved = await this.downloadsRepository.save(download);
    return { download: saved, uploadUrl };
  }

  findAll() {
    return this.downloadsRepository.find({
      where: { isPublic: true },
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(id: string) {
    const download = await this.downloadsRepository.findOne({ where: { id } });
    if (!download) {
      throw new NotFoundException(`Ressource ${id} introuvable`);
    }
    return download;
  }

  async update(id: string, updateDownloadDto: UpdateDownloadDto) {
    const download = await this.findOne(id);
    Object.assign(download, updateDownloadDto);
    return this.downloadsRepository.save(download);
  }

  async remove(id: string) {
    const download = await this.findOne(id);
    await this.minioService.removeObject(download.fileKey);
    return this.downloadsRepository.remove(download);
  }

  async getDownloadUrl(id: string) {
    const download = await this.findOne(id);
    const url = await this.minioService.getPresignedDownloadUrl(download.fileKey);
    return { url };
  }
}
