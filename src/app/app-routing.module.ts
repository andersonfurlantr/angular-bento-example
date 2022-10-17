import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'alerts',
    loadChildren: () =>
      import('./alert-example/alert-example.module').then(
        (m) => m.AlertExampleModule
      ),
  },
  {
    path: 'contextual-header',
    loadChildren: () =>
      import(
        './contextual-header-example/contextual-header-example.module'
      ).then((m) => m.ContextualHeaderExampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
