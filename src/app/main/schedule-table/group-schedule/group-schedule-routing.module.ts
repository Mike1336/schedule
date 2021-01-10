import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupScheduleComponent } from './group-schedule.component';

const routes: Routes = [{ path: '', component: GroupScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupScheduleRoutingModule { }
