import { Module } from '@nestjs/common';

import { MapController } from './map.controller';
import { MapService } from './map.service';
import { MapInst } from '../mongo';

@Module({
  imports: [
    MapInst,
  ],
  controllers: [MapController],
  providers: [MapService],
  exports: [MapService],
})
export class MapModule {}
