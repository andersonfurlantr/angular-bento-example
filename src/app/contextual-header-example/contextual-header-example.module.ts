import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContextualHeaderExampleRoutingModule } from './contextual-header-example-routing.module';
import { ContextualHeaderExampleComponent } from './contextual-header-example.component';
import { BentoContextualHeaderModule } from '@bento/bento-ng';

@NgModule({
  declarations: [ContextualHeaderExampleComponent],
  imports: [
    CommonModule,
    ContextualHeaderExampleRoutingModule,
    BentoContextualHeaderModule,
  ],
})
export class ContextualHeaderExampleModule {}
