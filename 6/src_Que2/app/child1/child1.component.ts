import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  template : `<h1>Inside Child Component</h1>

  <ng-template #prime>
      <h1>{{num}} is Prime</h1>
  </ng-template>
  
  <ng-template #nonprime>
      <h1>{{num}} is not Prime</h1>
  </ng-template>
  
  <h2 *ngIf = "bret ; then prime ; else nonprime">
  </h2>`
})
export class Child1Component implements OnInit 
{
  bret : boolean = false;
  num : number = 0;

  constructor(private _obj : NumberService) 
  { 
    this.num = 6;
  }

  ngOnInit(): void 
  {
    this.bret = this._obj.ChkPrime(this.num)
  }

}
