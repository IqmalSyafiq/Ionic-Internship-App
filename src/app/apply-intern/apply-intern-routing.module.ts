import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyInternPage } from './apply-intern.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyInternPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyInternPageRoutingModule {}
