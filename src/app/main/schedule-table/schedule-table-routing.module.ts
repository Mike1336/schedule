import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ScheduleTableComponent,
    children: [
      {
        path: 'classroom',
        loadChildren: () => import('./classroom-schedule/classroom-schedule.module').then(m => m.ClassroomScheduleModule),
      },
      {
        path: 'group',
        loadChildren: () => import('./group-schedule/group-schedule.module').then(m => m.GroupScheduleModule),
      },
      {
        path: 'teacher',
        loadChildren: () => import('./teacher-schedule/teacher-schedule.module').then(m => m.TeacherScheduleModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleTableRoutingModule { }
