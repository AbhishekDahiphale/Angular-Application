import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  CountCapital(str : string)
  {
    var cnt : number = 0;
    var i = 0;

    for(i=0;i<str.length;i++)
    {
      if(str.charAt(i)>= 'A' && str.charAt(i) <= 'Z' )
      {
        cnt = cnt + 1;
      }

    }
    return cnt;
  }


  constructor() { }
}
