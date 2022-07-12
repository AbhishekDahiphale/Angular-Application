import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent 
{
  public Name : string = "Marvellous";

  Concatenation():string
  {
    var ret : string = this.Name + " Infosystem";
    return ret;
  }

}
