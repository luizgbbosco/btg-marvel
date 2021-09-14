import { NgModule } from '@angular/core';
import { Page1Component } from './page1.component';
import { Page1RoutingModule } from './page1.routing.module';

@NgModule({
  declarations: [
    Page1Component,
  ],
  imports: [Page1RoutingModule],
  exports: [Page1Component]
})
export class Page1Module { }
