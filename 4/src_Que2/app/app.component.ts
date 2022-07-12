import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment';

  str:string = "Marvellous Infosystem";

  fun():string
  {
    return this.str;
  }
}
