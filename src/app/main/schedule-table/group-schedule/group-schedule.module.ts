import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupScheduleRoutingModule } from './group-schedule-routing.module';
import { GroupScheduleComponent } from './group-schedule.component';


@NgModule({
  declarations: [GroupScheduleComponent],
  imports: [
    CommonModule,
    GroupScheduleRoutingModule
  ]
})
export class GroupScheduleModule { }
