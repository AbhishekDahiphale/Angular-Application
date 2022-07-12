import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: `<h1>Inside Child2 Component</h1>

  <h2>
      {{str}} string contains {{bcnt}} Capital characters
  </h2>
  `
})
export class Child2Component implements OnInit
{
  bcnt : number = 0;
  str : any ;

  constructor(private _obj : StringService)
  { 
    this.str = "Marvellous Infosystem";
  }

  ngOnInit(): void 
  {
    this.bcnt = this._obj.CountCapital(this.str)

  }

}
