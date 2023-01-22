import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user';
import * as Path from 'path';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getUser(@Param() id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() userEntity: UserEntity) {
    return this.userService.create(userEntity);
  }

  @Put(':id')
  async update(@Param() id: number, @Body() userEntity: UserEntity) {
    return this.userService.update(id, userEntity);
  }

  @Delete(':id')
  async delete(@Param('id') id:number) {
    return this.userService.delete(id);
  }
}
