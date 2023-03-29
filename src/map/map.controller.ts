import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { MapService } from './map.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

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
}
