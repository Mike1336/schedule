import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherScheduleRoutingModule } from './teacher-schedule-routing.module';
import { TeacherScheduleComponent } from './teacher-schedule.component';


@NgModule({
  declarations: [TeacherScheduleComponent],
  imports: [
    CommonModule,
    TeacherScheduleRoutingModule
  ]
})
export class TeacherScheduleModule { }
