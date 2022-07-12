import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WrongRoutComponent } from './wrong-rout/wrong-rout.component';

const routes: Routes = [
  {path : 'books',component : BooksComponent},
  {path : 'Tech',component : TechnologiesComponent},
  {path : '' , component : TechnologiesComponent},
  {path : '**', component : WrongRoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
