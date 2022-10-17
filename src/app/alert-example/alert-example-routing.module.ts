import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertExampleComponent } from './alert-example.component';

const routes: Routes = [{ path: '', component: AlertExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertExampleRoutingModule { }
