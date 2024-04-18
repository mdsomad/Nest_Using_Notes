import {
  Controller,
  Post,
  Req,
  HttpCode,
  HttpStatus,
  Res,
  Header,
  Redirect,
  Get,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users') //? <-- Iska naam hai decorator
export class Usercontroller {
  @Post('/profile')
  @Redirect('/users/account') //? 👈  is tarike se Static switch Karva sakte hain
  //?👇is tarike se multiple header set kar sakte hain
  @Header('Cache-Control', 'none')
  @Header('X-Name', 'Somad')
  // @HttpCode(200)
  @HttpCode(HttpStatus.OK)
  getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    console.log(req.params);
    res.status(201);
    // res.json({
    //   Hello: ' Somad',
    // });
    // return {
    //   Hello: ' Somad',
    // };
    const rn = Math.random() * 10 + 1;

    //? 👇 is tarike se dynamically switch Karva sakte hain
    if (rn < 5) {
      return {
        url: '/users/account',
        statusCode: 302,
      };
    } else {
      return {
        url: '/users/wallet',
        statusCode: 302,
      };
    }
  }

  @Get('/account')
  redirectRoute() {
    return 'Working Account';
  }

  @Get('/wallet')
  redirectWallet() {
    return 'Working wallet';
  }
}
