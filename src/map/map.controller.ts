import { Body, Controller, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { MapService } from './map.service';
import { PictureService } from '../picture/picture.service';
import { S3Service } from '../s3/s3.service';

@Controller('map')
export class MapController {
  constructor(
    private readonly mapService: MapService,
    private readonly s3Service: S3Service,
    private readonly pictureService: PictureService,
  ) {}

  @Get('/:id')
  async getMap(@Param() { id }) {
    const map: any = await this.mapService.getMap(id);
    const pictures = await this.pictureService.getAllMapPictures(id);

    return {
      visitedCountries: map.visitedCountries,
      pictures,
    };
  }

  @Patch('/:id/add_country')
  @UseGuards(AuthGuard('jwt'))
  async addCountryToMap(@Body() { countryIdToAdd }, @Param() { id: mapId }) {
    console.log(countryIdToAdd);

    return this.mapService.addCountry(countryIdToAdd, mapId);
  }

  @Patch('/:id/delete_country')
  @UseGuards(AuthGuard('jwt'))
  async deleteCountryFromMap(@Body() { countryIdToDelete }, @Param() { id: mapId }) {
    console.log(countryIdToDelete);

    return this.mapService.removeCountry(countryIdToDelete, mapId);
  }

  @Get('/:id/picture_upload_url')
  @UseGuards(AuthGuard('jwt'))
  async getUploadPicture(@Query() { mapId }) {
    console.log(mapId);
    // verify user has access to this map
    return this.s3Service.getSignedLinkToUpload(mapId);
  }
}
