import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  ChkPrime(num :number)
  {
    var i: number = 0
    var flag  :boolean = true;
    for(i=2;i<num;i++)
    {
      if((num%i)==0)
      {
        flag = false
      }

    }

    return flag;

  }


  constructor() { }
}
