import { Controller, Get } from '@nestjs/common';

@Controller('/users') //* <-- Iska naam hai decorator
export class AlbumsController {
  @Get('/albums')
  getProfile() {
    return 'photos';
  }
}
