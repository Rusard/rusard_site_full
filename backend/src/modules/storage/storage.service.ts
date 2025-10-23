import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client as MinioClient } from 'minio';

@Injectable()
export class MinioService {
  private readonly logger = new Logger(MinioService.name);
  private readonly client: MinioClient;
  private readonly bucket: string;
  private readonly useSSL: boolean;

  constructor(private readonly configService: ConfigService) {
    const endpoint = this.configService.get<string>('storage.endpoint', 'localhost');
    const port = this.configService.get<number>('storage.port', 9000);
    this.useSSL = this.configService.get<boolean>('storage.useSSL', false);
    this.bucket = this.configService.get<string>('storage.bucket', 'rusard-assets');

    this.client = new MinioClient({
      endPoint: endpoint,
      port,
      useSSL: this.useSSL,
      accessKey: this.configService.get<string>('storage.accessKey'),
      secretKey: this.configService.get<string>('storage.secretKey')
    });
  }

  async ensureBucket() {
    const exists = await this.client.bucketExists(this.bucket);
    if (!exists) {
      await this.client.makeBucket(this.bucket, '');
      this.logger.log(`Bucket MinIO ${this.bucket} créé.`);
    }
  }

  async getPresignedUploadUrl(objectName: string, expirySeconds = 900) {
    return this.client.presignedPutObject(this.bucket, objectName, expirySeconds);
  }

  async getPresignedDownloadUrl(objectName: string, expirySeconds = 3600) {
    return this.client.presignedGetObject(this.bucket, objectName, expirySeconds);
  }

  async removeObject(objectName: string) {
    await this.client.removeObject(this.bucket, objectName);
  }
}
