import { Controller, Post, Body } from '@nestjs/common';

interface VideoDTO {
  name: string;
  tag: string;
}
@Controller('users') //* <-- Iska naam hai decorator
export class Usercontroller {
  @Post('/video')
  addVideo(@Body() requestData: VideoDTO) {
    console.log(requestData.name, requestData.tag);
    return {
      success: true,
    };
  }

  //*👇 Specific key extract
  @Post('/video2')
  addVideo2(@Body('name') requestData: string) {
    console.log(requestData);
    return {
      success: true,
    };
  }
}
