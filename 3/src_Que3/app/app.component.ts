import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>
  Inside Root Component
</h1>

<h1 class="Color">Marvellous Infosystem</h1>
<h1 class="Color" >{{str}}</h1>`,
  styles: [`.Color
  {
      color: blue;
  }`] 
})
export class AppComponent 
{
  title = 'Assignment';

  public str : string = "Marvellous Infosystem";
}
