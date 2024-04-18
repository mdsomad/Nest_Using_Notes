import { Controller, Get, Post, Put, Delete, Patch, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/users') //* <-- Iska naam hai decorator
export class Usercontroller {
  @Post('/profile')
  getProfile(@Req() req: Request) {
    console.log(req.params);
    return {
      Hello: ' Somad',
    };
  }
}
