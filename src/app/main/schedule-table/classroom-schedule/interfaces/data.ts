export interface IResponse {
  classes: IClass[];
}

export interface ISchedule {
  id: number;
  number: number;
  start_time: string;
  finish_time: string;
}

export interface IClass {
  id: number;
  number: number;
  start_time: string;
  finish_time: string;
  group: string;
  teacher: string;
}
