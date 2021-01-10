import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupScheduleRoutingModule } from './group-schedule-routing.module';
import { GroupScheduleComponent } from './components/group-schedule/group-schedule.component';
import { GroupScheduleService } from './services/group-schedule.service';


@NgModule({
  declarations: [
    GroupScheduleComponent,
  ],
  imports: [
    CommonModule,
    GroupScheduleRoutingModule
  ],
  providers: [
    GroupScheduleService,
  ]
})
export class GroupScheduleModule { }
