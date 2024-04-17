import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaGradePageRoutingModule } from './minha-grade-routing.module';

import { MinhaGradePage } from './minha-grade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhaGradePageRoutingModule
  ],
  declarations: [MinhaGradePage]
})
export class MinhaGradePageModule {}
