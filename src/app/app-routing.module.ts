import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./pages/page1/page1.module').then(m => m.Page1Module),
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
    path: '**', component: Page1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }