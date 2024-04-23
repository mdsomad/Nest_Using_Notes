import { Controller, Get } from '@nestjs/common';
import { UserStore } from './users.store';

@Controller('/users') //* <-- Iska naam hai decorator             //* <-- Iska naam hai decorator
export class Usercontroller {
  constructor(private store: UserStore) {
    console.log('Controller init');
  }

  @Get()
  getUsers() {
    return 'Route called';
  }
}
