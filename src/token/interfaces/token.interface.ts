import * as mongoose from 'mongoose';

import { IBaseMongoDoc } from '../../mongo/interfaces/mongo.interfaces';

export interface ITokenInfo  {
  user: mongoose.Types.ObjectId;
  type: 'dev'|'admin'|'user';
  deleted: boolean;
}

export interface ITokenDoc extends IBaseMongoDoc, ITokenInfo {}
