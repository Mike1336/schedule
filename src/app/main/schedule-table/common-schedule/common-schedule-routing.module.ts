import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonScheduleComponent } from './common-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: CommonScheduleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonScheduleRoutingModule { }
