import { Module } from '@nestjs/common';

import { MapController } from './map.controller';
import { MapService } from './map.service';
import { MapInst } from '../mongo';
import { PictureModule } from '../picture/picture.module';
import { S3Module } from '../s3/s3.module';

@Module({
  imports: [
    MapInst,
    S3Module,
    PictureModule,
  ],
  controllers: [MapController],
  providers: [MapService],
  exports: [MapService],
})
export class MapModule {}
