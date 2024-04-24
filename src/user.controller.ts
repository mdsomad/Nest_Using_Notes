import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto';
import { UserService } from './users.service';

@Controller('/users') //* <-- Iska naam hai decorator             //* <-- Iska naam hai decorator
export class UsersController {
  constructor(private usersService: UserService) {}

  @Post()
  createuser(@Body() createUserDto: CreateUserDTO) {
    this.usersService.addUser(createUserDto);
    return { message: 'USER ADDED' };
  }

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  findUser(@Param('id') id: number) {
    console.log(id);
    return this.usersService.getUser(+id);
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
    this.usersService.updateUser(+id, updateUserDto);
    return { message: 'USER UPDATED' };
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    this.usersService.deleteUser(+id);

    return { message: 'USER DELETED' };
  }
}
