import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/configuration';
import { typeOrmAsyncConfig } from './config/database.config';
import { AuthModule } from './modules/auth/auth.module';
import { DownloadsModule } from './modules/downloads/downloads.module';
import { HealthModule } from './modules/health/health.module';
import { ProductsModule } from './modules/products/products.module';
import { StorageModule } from './modules/storage/storage.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    HealthModule,
    UsersModule,
    AuthModule,
    ProductsModule,
    DownloadsModule,
    StorageModule
  ]
})
export class AppModule {}
