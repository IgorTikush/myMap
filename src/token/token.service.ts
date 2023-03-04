import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ITokenDoc, ITokenInfo } from './interfaces/token.interface';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<ITokenDoc>,
  ) {}

  create(tokenData: ITokenInfo) {
    return this.tokenModel.create(tokenData);
  }
}
