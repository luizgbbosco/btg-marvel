import { NgModule } from '@angular/core';
import { Page3Component } from './page3.component';
import { Page3RoutingModule } from './page3.routing.module';

@NgModule({
  declarations: [
    Page3Component,
  ],
  imports: [Page3RoutingModule],
  exports: [Page3Component]
})
export class Page3Module { }
