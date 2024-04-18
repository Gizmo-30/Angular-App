import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {BehaviorSubject, map, Observable} from "rxjs";
import {ITask} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  storage$: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage);
  constructor() {}

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.storage$.next(localStorage);
  }

  public getItem<T>(key: string): Observable<any> {
    return this.storage$.pipe(
      map((storage: any) => {
        return storage[key] ? JSON.parse(storage[key]) : undefined;
      })
    );
  }
}
