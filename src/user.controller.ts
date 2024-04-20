import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dto';

let USERS = [];

@Controller('users') //* <-- Iska naam hai decorator
export class Usercontroller {
  //TODO Post Methods Used
  @Post()
  addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return 'User added successfully';
  }

  //TODO Get Methods Used
  @Get()
  getUsers() {
    return USERS;
  }

  //TODO Get Methods Used
  @Get(':id')
  getUser(@Param('id') id: number) {
    return USERS.find((user) => +user.id === +id);
  }

  //TODO Put & Update Methods Used
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
    const userIdx = USERS.findIndex((user) => +user.id === +id);

    if (!userIdx) {
      return;
    }

    USERS[userIdx] = updateUserDto;
  }

  //TODO Delete Methods Used
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    USERS = USERS.filter((user) => +user.id !== +id);
  }
}
