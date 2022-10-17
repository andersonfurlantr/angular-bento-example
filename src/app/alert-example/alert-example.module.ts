import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertExampleRoutingModule } from './alert-example-routing.module';
import { AlertExampleComponent } from './alert-example.component';
import { BentoAlertModule } from '@bento/bento-ng';


@NgModule({
  declarations: [
    AlertExampleComponent
  ],
  imports: [
    CommonModule,
    AlertExampleRoutingModule,
    BentoAlertModule
  ]
})
export class AlertExampleModule { }
