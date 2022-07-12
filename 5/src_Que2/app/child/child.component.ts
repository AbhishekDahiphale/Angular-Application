import { Component, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  @Output() public obj = new EventEmitter();
  public Message = "Mla tumhi spam folder pathvlach nhii ....";
  SendMessage()
  {
    this.obj.emit(this.Message);
  }

  @Input() public MsgParent : any ;

}
