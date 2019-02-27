import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../repositories/components';
import {FavoritesComponent} from '../repositories/components';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'favorites', component: FavoritesComponent},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
