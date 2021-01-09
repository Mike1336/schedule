import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleTableRoutingModule } from './schedule-table-routing.module';
import { ScheduleTableComponent } from './schedule-table.component';


@NgModule({
  declarations: [ScheduleTableComponent],
  imports: [
    CommonModule,
    ScheduleTableRoutingModule
  ]
})
export class ScheduleTableModule { }
