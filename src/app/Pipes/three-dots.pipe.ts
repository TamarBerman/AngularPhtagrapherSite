import { Pipe, PipeTransform } from '@angular/core';
import { Review } from '../Classes/review';

@Pipe({
  name: 'threeDots'
})
export class ThreeDotsPipe implements PipeTransform {
  sliceName?:String;
  transform(contetnt: string): any {
    if(contetnt.length>55)
    {
      this.sliceName=contetnt.slice(0,55).concat("...");
      return this.sliceName;
    }
    return contetnt;
  }

}
