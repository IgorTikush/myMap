import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

import { IMap } from './interfaces/map.interface';

@Injectable()
export class MapService {
  constructor(
    @InjectModel('Map') private readonly mapModel: Model<IMap>,
  ) {}

  async create(userId: mongoose.Types.ObjectId) {
    return this.mapModel.create({ visitedCountries: [], user: userId });
  }

  async getMap(mapId) {
    return this.mapModel.findOne({ _id: mapId });
  }

  async addCountry(countryIdToAdd, mapId) {
    return this.mapModel.updateOne({ _id: mapId }, { $addToSet: { visitedCountries: countryIdToAdd } });
  }
}
