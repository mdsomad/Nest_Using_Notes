import { Controller, Get, HostParam, Ip } from '@nestjs/common';

@Controller('users') //* <-- Iska naam hai decorator
//* @Controller({path:'/users',host: 'app:domain.com'})               //* <-- Iska naam hai decorator
export class Usercontroller {
  //TODO Get Methods Used Find ip
  @Get()
  getUsers(@Ip() ip: string) {
    console.log(ip);
    return { message: 'hello world', Get_IP_Address: ip };
  }

  //TODO Get Methods Used  Find domain
  @Get()
  getUsers2(@HostParam('domain') params: Record<string, any>) {
    return 'hello world 2';
  }
}
