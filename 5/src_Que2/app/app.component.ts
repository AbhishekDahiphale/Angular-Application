import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment';

  flag : boolean = false;

  TakeMessage : any;

  public Message  = "Mail Spam Mdhe gela asel...."

  clear()
  {
    this.TakeMessage = "";
  } 

  fun()
  {
    this.flag = true;
  }
}
