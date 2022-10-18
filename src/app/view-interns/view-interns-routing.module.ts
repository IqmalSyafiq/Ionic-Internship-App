import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewInternsPage } from './view-interns.page';

const routes: Routes = [
  {
    path: '',
    component: ViewInternsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewInternsPageRoutingModule {}
