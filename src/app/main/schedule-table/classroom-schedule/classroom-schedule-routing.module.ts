import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassroomScheduleComponent } from './classroom-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ClassroomScheduleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomScheduleRoutingModule { }
