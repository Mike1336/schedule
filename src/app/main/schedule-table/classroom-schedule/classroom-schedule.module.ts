import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomScheduleRoutingModule } from './classroom-schedule-routing.module';
import { ClassroomScheduleComponent } from './classroom-schedule.component';


@NgModule({
  declarations: [ClassroomScheduleComponent],
  imports: [
    CommonModule,
    ClassroomScheduleRoutingModule
  ]
})
export class ClassroomScheduleModule { }
