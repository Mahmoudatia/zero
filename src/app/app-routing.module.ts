import { MainListingScreenComponent } from './main-listing-screen/main-listing-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglCardComponent } from '../app/singl-card/singl-card.component'
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {path: 'item', component: SinglCardComponent},
  {path: 'next' , component: PaginationComponent},
  {path: 'main' , component: MainListingScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
