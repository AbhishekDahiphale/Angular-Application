import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  Fname:any;
  lname:any;
  mail:any;
  flag:any = false;

  date:any;
  time : any;
  TextArea:any;
  Impact : any;

  title = 'Ass10';
}
