import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserValidation } from './validations/create-user-validations';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userInfo: CreateUserValidation) {
    return this.userService.create(userInfo);
  }
}
