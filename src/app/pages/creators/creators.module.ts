import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { CreatorsRoutingModule } from './creators.routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [
    CreatorsComponent,
  ],
  imports: [CreatorsRoutingModule, CommonModule, CardModule, ButtonModule],
  exports: [CreatorsComponent]
})
export class CreatorsModule { }
