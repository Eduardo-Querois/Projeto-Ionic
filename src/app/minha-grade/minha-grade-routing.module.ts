import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhaGradePage } from './minha-grade.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaGradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhaGradePageRoutingModule {}
