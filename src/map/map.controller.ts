import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { MapService } from './map.service';
import { AuthGuard } from '@nestjs/passport';
import { S3Service } from '../s3/s3.service';

@Controller('map')
export class MapController {
  constructor(
    private readonly mapService: MapService,
    private readonly s3Service: S3Service
  ) {}

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  async getMap(@Param() { id }) {
    console.log(id);

    return this.mapService.getMap(id);
  }

  @Patch('/:id/add_country')
  @UseGuards(AuthGuard('jwt'))
  async addCountryToMap(@Body() { countryIdToAdd }, @Param() { id: mapId }) {
    console.log(countryIdToAdd);

    return this.mapService.addCountry(countryIdToAdd, mapId);
  }

  @Get('/:id/picture_upload_url')
  @UseGuards(AuthGuard('jwt'))
  async getUploadPicture() {
    // verify user has access to this map
    return this.s3Service.getSignedLinkToUpload();
  }
}
