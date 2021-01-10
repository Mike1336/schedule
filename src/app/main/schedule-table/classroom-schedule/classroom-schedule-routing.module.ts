import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassroomScheduleContainer } from './containers/classroom-schedule/classroom-schedule.container';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1',
  },
  {
    path: ':room',
    component: ClassroomScheduleContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassroomScheduleRoutingModule { }
