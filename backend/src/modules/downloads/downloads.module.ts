import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { StorageModule } from '../storage/storage.module';
import { Download } from './entities/download.entity';
import { DownloadsController } from './downloads.controller';
import { DownloadsService } from './downloads.service';

@Module({
  imports: [TypeOrmModule.forFeature([Download]), StorageModule, AuthModule],
  controllers: [DownloadsController],
  providers: [DownloadsService],
  exports: [DownloadsService]
})
export class DownloadsModule {}
