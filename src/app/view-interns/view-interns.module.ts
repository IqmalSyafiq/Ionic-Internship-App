import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewInternsPageRoutingModule } from './view-interns-routing.module';

import { ViewInternsPage } from './view-interns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewInternsPageRoutingModule
  ],
  declarations: [ViewInternsPage]
})
export class ViewInternsPageModule {}
