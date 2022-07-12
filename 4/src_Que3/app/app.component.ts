import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment';

  str1 = "";

  str2 = "";

  fun()
  {
    this.str1 = "Educating for better tomorrow";
  }

  gun()
  {
    this.str2 = "Marvellous Infosystem";
  
  }

  clear1()
  {
    this.str1 = "";
  }

  clear2()
  {
    this.str2 = "";
  }
}
