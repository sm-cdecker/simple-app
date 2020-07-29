import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNumberComponent } from './add-number/add-number.component';
import { HomeComponent } from './home/home.component';
import { ViewNumbersComponent } from './view-numbers/view-numbers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddNumberComponent
  },
  {
    path: 'view',
    component: ViewNumbersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
