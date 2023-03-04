import { IBaseMongoDoc } from '../../mongo/interfaces/mongo.interfaces';

export interface IUser {
  email: string;
  password: string;
}

export interface IUserDoc extends IUser, IBaseMongoDoc {}
