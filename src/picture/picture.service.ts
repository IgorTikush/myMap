import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMap } from '../map/interfaces/map.interface';
import { IPicture } from './interfaces/picture.interface';

@Injectable()
export class PictureService {
  constructor(
    @InjectModel('Picture') private readonly pictureModel: Model<IPicture>,
  ) {}

  async create(createPictureDto: IPicture) {
    return this.pictureModel.create(createPictureDto);
  }

  findAll() {
    return `This action returns all picture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} picture`;
  }

  update(id: number, updatePictureDto: UpdatePictureDto) {
    return `This action updates a #${id} picture`;
  }

  remove(id: number) {
    return `This action removes a #${id} picture`;
  }
}
