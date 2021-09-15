import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesRoutingModule } from './series.routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [
    SeriesComponent,
  ],
  imports: [SeriesRoutingModule, CommonModule, CardModule, ButtonModule],
  exports: [SeriesComponent]
})
export class SeriesModule { }