import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PictureService } from './picture.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreatePictureValidation } from './validations/create-picture.validation';
import * as mongoose from 'mongoose';

@Controller('picture')
@UseGuards(AuthGuard('jwt'))
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @Post()
  create(@Body() createPictureParams: CreatePictureValidation, @Req() { user }) {
    const createParams = {
      user: user._id,
      ...createPictureParams,
    };

    return this.pictureService.create(createParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pictureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto) {
    return this.pictureService.update(+id, updatePictureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // сделать удаление с s3
    return this.pictureService.remove(id);
  }
}
