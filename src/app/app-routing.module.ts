import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../repositories/components/dashboard/dashboard.component';
import {FavoritesComponent} from '../repositories/components/favorites/favorites.component';

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
