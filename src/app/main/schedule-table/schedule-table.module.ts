import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CascadeSelectModule } from 'primeng/cascadeselect';

import { ScheduleTableRoutingModule } from './schedule-table-routing.module';
import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';
import { ScheduleService } from './services/schedule.service';


@NgModule({
  declarations: [
    ScheduleTableComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    HttpClientModule,
    // PrimeNG
    CascadeSelectModule,
    // Own
    ScheduleTableRoutingModule,
  ],
  providers: [
    ScheduleService,
  ],
})
export class ScheduleTableModule { }
