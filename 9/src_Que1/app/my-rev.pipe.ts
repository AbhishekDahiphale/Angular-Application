import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MyRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): unknown 
  {
    var i:number=0
    var temp: string = "";
    for(i=value.length;i>=0;i--)
    {
       temp = temp + value[i]
    }

    return temp;
  }

}
