import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContextualHeaderExampleComponent } from './contextual-header-example.component';

const routes: Routes = [{ path: '', component: ContextualHeaderExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContextualHeaderExampleRoutingModule { }
