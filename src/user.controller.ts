import { Controller, Get, Param, Query, Headers } from '@nestjs/common';

interface videosparams {
  id: number;
  name: string;
}
interface queryParam {
  age: number;
  name: string;
}

@Controller('users') //* <-- Iska naam hai decorator
export class Usercontroller {
  @Get('/videos/:id/:name')
  getVideos(@Param() params: videosparams) {
    console.log(params);
    return 'Success';
  }

  //* no data type defined params
  // @Get('/videos/:id')
  // getVideos(@Param() params:Record<string,any>) {
  //   console.log(params);
  //   return 'Success';
  // }

  //* QueryParam use
  @Get('/videos2')
  getVideos2(@Query() query: queryParam) {
    console.log(query);
    console.log(query.name);
    return 'Success';
  }

  //* headers data get
  @Get('/headers')
  getHeaders(@Headers() headers: Record<string, any>) {
    console.log(headers);
    return 'Success';
  }
}
