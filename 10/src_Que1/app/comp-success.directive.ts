import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private obj:ElementRef) { }

  @HostListener('mouseenter')onmouseenter()
  {
    this.obj.nativeElement.style.background = "green";
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.obj.nativeElement.style.background = "black";
  }

}
