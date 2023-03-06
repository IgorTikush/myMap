import { Injectable } from '@nestjs/common';
import { verify } from 'argon2';

import { IUserAuth } from './interfaces/user-auth-interface';
import { IUserDoc } from '../user/interfaces/IUser.interface';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}

  async validateUser(email: string, password: string): Promise<IUserAuth>|null {
    const user: IUserDoc = await this.userService.findByEmail(email);
    if (!user) {
      return null;
    }

    const {
      password: userPasswordHash,
      _id,
      isBlocked,
    } = user;

    const validationResult = await verify(userPasswordHash, password);

    if (!validationResult) {
      return null;
    }

    return {
      _id,
      email,
      isBlocked,
    };
  }
}
