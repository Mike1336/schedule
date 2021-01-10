import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable()
export class ScheduleService {

  constructor(private _http: HttpClient) {}

  public getSchedule(): Observable<object> {
    return this._http.get('assets/schedule/classes-schedule.json').pipe(delay(3000));
  }

}
