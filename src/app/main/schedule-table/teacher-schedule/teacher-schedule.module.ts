import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherScheduleRoutingModule } from './teacher-schedule-routing.module';
import { TeacherScheduleComponent } from './components/teacher-schedule/teacher-schedule.component';
import { TeacherScheduleService } from './services/teacher-schedule.service';


@NgModule({
  declarations: [
    TeacherScheduleComponent,
  ],
  imports: [
    CommonModule,
    TeacherScheduleRoutingModule
  ],
  providers: [
    TeacherScheduleService,
  ]
})
export class TeacherScheduleModule { }
