import { Controller, Get } from '@nestjs/common';
import { UserStore } from './users.store';

@Controller('/users') //* <-- Iska naam hai decorator             //* <-- Iska naam hai decorator
export class AlbumsController {
  constructor(private store: UserStore) {
    console.log('Albums Controller init');
  }

  @Get()
  getUsers() {
    return 'Route called';
  }
}
