import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithimaticService 
{
  Addition(num1:number,num2:number)
  {
    return (num1+num2);
  }

  subtraction(num1:number,num2:number)
  {
    return (num1-num2);
  }

  constructor() { }
}
