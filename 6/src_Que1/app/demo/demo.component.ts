import { Component, OnInit } from '@angular/core';
import { ArithimaticService } from '../arithimatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit
{
  public rAdd : number = 0;
  public rsub : number = 0;
  num1 : number = 0;
  num2 : number = 0;

  constructor(private _obj : ArithimaticService)
  {
    this.num1 = 21;
    this.num2 = 11;
   }

  ngOnInit(): void 
  {
    this.rAdd = this._obj.Addition(this.num1,this.num2);
    this.rsub = this._obj.subtraction(this.num1,this.num2);
  }

}
