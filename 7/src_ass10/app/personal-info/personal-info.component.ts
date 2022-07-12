import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent 
{
  @Output() public Event1 = new EventEmitter();
  @Output() public Event2 = new EventEmitter();
  @Output() public Event3 = new EventEmitter();
  
  public FirstName : any;
  public LastName  : any;
  public Email :any ;  
   
  fun()
  {
    this.Event1.emit(this.FirstName);
    this.Event2.emit(this.LastName);
    this.Event3.emit(this.Email); 
     
  }

  
}
