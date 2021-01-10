import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'classroom',
    loadChildren: () => import('./classroom-schedule/classroom-schedule.module').then(m => m.ClassroomScheduleModule),
  },
  {
    path: '',
    loadChildren: () => import('./common-schedule/common-schedule.module').then(m => m.CommonScheduleModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleTableRoutingModule { }
