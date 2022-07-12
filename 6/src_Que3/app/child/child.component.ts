import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit
{
  bret : boolean = false;
  num : number = 0;
  bcnt : number = 0;
  str : any ;

  constructor(private _obj1 : NumberService,private _obj2  :StringService) 
  {
    this.num = 5;
    this.str = "MarvEllous InfoSystem";
   }

  ngOnInit(): void
  {
    this.bret = this._obj1.ChkPrime(this.num)
    this.bcnt = this._obj2.CountCapital(this.str)
  }

}
