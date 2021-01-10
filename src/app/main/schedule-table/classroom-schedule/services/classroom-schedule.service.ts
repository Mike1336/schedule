import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ClassroomScheduleService {

  constructor(private _http: HttpClient) {}

  public getDataByRoomNumber(value: number): Observable<object> {
    return this._http.get(`assets/classrooms/classroom-${value}-schedule.json`).pipe(delay(3000));
  }

}
