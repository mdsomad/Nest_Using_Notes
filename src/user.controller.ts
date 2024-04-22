import { Controller, Inject } from '@nestjs/common';
import { Subject } from 'rxjs';

@Controller('/users') //* <-- Iska naam hai decorator             //* <-- Iska naam hai decorator
export class Usercontroller {
  constructor(@Inject('EVENT_STORE') private eventbus: Subject<any>) {
    console.log(eventbus);
  }
}
