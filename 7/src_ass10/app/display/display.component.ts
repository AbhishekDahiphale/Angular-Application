import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit
 
{
  @Input() First_Name : any;
  @Input() Last_Name : any;
  @Input() EMail : any;
  @Input() Date : any;
  @Input() Time : any;
  @Input() Impact : any;
  @Input() Text : any;

  constructor() {
   
   }

 
  ngOnInit(): void {
     
  }

}
