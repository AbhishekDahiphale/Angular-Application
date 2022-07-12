import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArithimaticService } from './arithimatic.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [ArithimaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
