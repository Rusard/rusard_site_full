import { Logger, Module, OnModuleInit } from '@nestjs/common';

import { MinioService } from './storage.service';

@Module({
  providers: [MinioService],
  exports: [MinioService]
})
export class StorageModule implements OnModuleInit {
  private readonly logger = new Logger(StorageModule.name);

  constructor(private readonly minioService: MinioService) {}

  async onModuleInit() {
    try {
      await this.minioService.ensureBucket();
    } catch (error) {
      this.logger.warn(`Impossible de vérifier le bucket MinIO: ${error}`);
    }
  }
}
