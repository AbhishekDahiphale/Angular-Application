import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  @Output() public obj = new EventEmitter();
  public Message:any;
  SendMessage()
  {
    this.obj.emit(this.Message);
  }

}
