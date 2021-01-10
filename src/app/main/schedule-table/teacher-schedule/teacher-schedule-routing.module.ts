import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherScheduleComponent } from './teacher-schedule.component';

const routes: Routes = [{ path: '', component: TeacherScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherScheduleRoutingModule { }
