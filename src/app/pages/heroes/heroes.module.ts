import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes.routing.module';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [
    HeroesComponent,
  ],
  imports: [HeroesRoutingModule, CommonModule, CardModule, ButtonModule],
  exports: [HeroesComponent]
})
export class HeroesModule { }
