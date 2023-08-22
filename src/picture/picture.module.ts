import { Module } from '@nestjs/common';

import { PictureController } from './picture.controller';
import { PictureService } from './picture.service';
import { PictureInst } from '../mongo';

@Module({
  imports: [
    PictureInst,
  ],
  controllers: [PictureController],
  providers: [PictureService],
  exports: [PictureService],
})
export class PictureModule {}
