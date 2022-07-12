import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit 
{
  @Output() public Myevent = new EventEmitter();
  public flag : boolean = false;

  Click()
  {
    this.flag = true;
    this.Myevent.emit(this.flag);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
