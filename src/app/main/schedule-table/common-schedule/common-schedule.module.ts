import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonScheduleRoutingModule } from './common-schedule-routing.module';
import { CommonScheduleComponent } from './common-schedule.component';


@NgModule({
  declarations: [CommonScheduleComponent],
  imports: [
    CommonModule,
    CommonScheduleRoutingModule
  ]
})
export class CommonScheduleModule { }
