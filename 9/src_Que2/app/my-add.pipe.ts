import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown 
  {
    var RAdd:number;
    
    RAdd = value + args[0];
    return RAdd;
  }

}
