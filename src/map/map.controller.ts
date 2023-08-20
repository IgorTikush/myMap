import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { MapService } from './map.service';
import { AuthGuard } from '@nestjs/passport';
import { S3Service } from '../s3/s3.service';

@Controller('map')
@UseGuards(AuthGuard('jwt'))
export class MapController {
  constructor(
    private readonly mapService: MapService,
    private readonly s3Service: S3Service
  ) {}

  @Get('/:id')
  async getMap(@Param() { id }) {
    console.log(id);

    return this.mapService.getMap(id);
  }

  @Patch('/:id/add_country')
  async addCountryToMap(@Body() { countryIdToAdd }, @Param() { id: mapId }) {
    console.log(countryIdToAdd);

    return this.mapService.addCountry(countryIdToAdd, mapId);
  }

  @Get('/:id/picture_upload_url')
  async getUploadPicture(@Query() { mapId }) {
    console.log(mapId);
    // verify user has access to this map
    return this.s3Service.getSignedLinkToUpload(mapId);
  }
}
