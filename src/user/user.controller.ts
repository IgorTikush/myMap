import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserTokensDTO } from './dto/user-tokens.dto';
import { UserService } from './user.service';
import { CreateUserValidation } from './validations/create-user-validations';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userInfo: CreateUserValidation): Promise<UserTokensDTO> {
    const userTokens = await this.userService.create(userInfo);

    return new UserTokensDTO(userTokens);
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req): Promise<UserTokensDTO> {
    const userId = req.user._id;
    console.log(req.user);
    const userTokens = await this.userService.getTokens({ userId });

    return new UserTokensDTO(userTokens);
  }
}
