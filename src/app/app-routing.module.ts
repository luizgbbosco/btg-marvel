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
    path: 'page2',
    loadChildren: () => import('./pages/page2/page2.module').then(m => m.Page2Module),
  },
  {
    path: 'page3',
    loadChildren: () => import('./pages/page3/page3.module').then(m => m.Page3Module),
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