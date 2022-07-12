import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown 
  {
    var RMult:number;
    RMult = value*args[0]
    return RMult;
  }

}
