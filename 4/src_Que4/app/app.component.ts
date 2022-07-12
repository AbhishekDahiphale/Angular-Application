import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment';

  str = "Marvellous Infosystem";

  UPPERCASE()
  {
    this.str = this.str.toUpperCase();
  }

  lowercase()
  {
    this.str = this.str.toLowerCase();
  }

  
}
