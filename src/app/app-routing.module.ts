import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    loadChildren: () => import('./pages/heroes/heroes.module').then(m => m.HeroesModule),
  },
  {
    path: 'creators',
    loadChildren: () => import('./pages/creators/creators.module').then(m => m.CreatorsModule),
  },
  {
    path: 'series',
    loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesModule),
  },
  {
    path: '**', component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }