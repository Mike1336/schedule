import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { ScheduleService } from '../../../services/schedule.service';
import { IClass } from '../../interfaces/data';

import { ISchedule } from './../../interfaces/data';
import { ClassroomScheduleService } from './../../services/classroom-schedule.service';

@Component({
  templateUrl: './classroom-schedule.container.html',
  styleUrls: ['./classroom-schedule.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassroomScheduleContainer implements OnInit, OnDestroy {

  public loading: boolean;

  public schedule: ISchedule[] = [];

  public classes: IClass[] = [];

  private _destroy$ = new Subject<void>();

  constructor(
    private _route: ActivatedRoute,
    private _cdRef: ChangeDetectorRef,
    private _classesService: ClassroomScheduleService,
    private _scheduleService: ScheduleService,
    ) { }

  public ngOnInit(): void {
    this._listenRouteParams();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _checkClassesResponse(value: any): void {
    if (!value || !('classes' in value)) {
      throw new Error(`Incorrect value in response of getDataByRoomNumber: ${value}`);
    }

    this.classes = value.classes;
    this._cdRef.markForCheck();
  }

  private _checkScheduleResponse(value: any): void {
    if (!value || !('data' in value)) {
      throw new Error(`Incorrect value in response of getSchedule: ${value}`);
    }

    this.schedule = value.data;
    this._cdRef.markForCheck();
  }

  private _getData(roomNumber: number): void {
    this._scheduleService.getSchedule()
      .pipe(
        switchMap((data: ISchedule) => {
          this._checkScheduleResponse(data);

          return this._classesService.getDataByRoomNumber(roomNumber);
        }),
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (data: unknown) => {
          this._checkClassesResponse(data);
          this.loading = false;
          this._cdRef.markForCheck();
        },
        error: (error) => {
          this.loading = false;
          this._cdRef.markForCheck();
          throw new Error(`Error in getting schedule from ClassroomScheduleService: ${error}`);
        },
      });
  }

  private _listenRouteParams(): void {
    this._route.params
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (params: Params) => {
          this.loading = true;
          this._getData(+(params.room));
        },
        error: (error) => {
          console.error(`Error in route params: ${error}`);
        },
      });
  }

}
