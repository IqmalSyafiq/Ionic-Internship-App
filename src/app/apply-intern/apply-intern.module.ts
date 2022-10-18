import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyInternPageRoutingModule } from './apply-intern-routing.module';

import { ApplyInternPage } from './apply-intern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyInternPageRoutingModule
  ],
  declarations: [ApplyInternPage]
})
export class ApplyInternPageModule {}
