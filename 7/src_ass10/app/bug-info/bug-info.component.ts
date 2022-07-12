
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct, NgbTimepicker, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit 
{
  @Output() public Event4 = new EventEmitter();
  @Output() public Event5 = new EventEmitter();
  @Output() public Event6 = new EventEmitter();
  @Output() public Event7 = new EventEmitter();

   


  date = new Date()
  model:NgbDateStruct = {year : this.date.getFullYear(), month : this.date.getMonth(),day : this.date.getDay()}

    
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;
  tear :any;

  dropdn:any; 

  constructor() 
  {
    this.dropdn = "Low";
   }

  Low()
  {
    this.dropdn = "Low"
  } 
  High()
  {
    this.dropdn = "High"
  }
  Medium()
  {
    this.dropdn = "Medium"
  }

  gun()
  {
    this.Event4.emit(this.model);
    this.Event5.emit(this.time);
    this.Event6.emit(this.tear);
    this.Event7.emit(this.dropdn)
  }

  ngOnInit(): void {
  }

}
