import { NgModule } from '@angular/core';
import { Page2Component } from './page2.component';
import { Page2RoutingModule } from './page2.routing.module';

@NgModule({
  declarations: [
    Page2Component,
  ],
  imports: [Page2RoutingModule],
  exports: [Page2Component]
})
export class Page2Module { }
