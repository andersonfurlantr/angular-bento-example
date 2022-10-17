import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertExampleRoutingModule } from './alert-example-routing.module';
import { AlertExampleComponent } from './alert-example.component';


@NgModule({
  declarations: [
    AlertExampleComponent
  ],
  imports: [
    CommonModule,
    AlertExampleRoutingModule
  ]
})
export class AlertExampleModule { }
