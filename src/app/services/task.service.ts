import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ITask} from "../models/task";


@Injectable()
export class TasksService {
  private tasksSubject: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>([]);
  constructor () {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      const tasks = JSON.parse(tasksJson);
      this.tasksSubject.next(tasks);
    }
  }

  getTasks(): Observable<ITask[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: any): void {
    let maxId = this.getMaxId()
    let id = maxId === 0 ? 1 : ++maxId

    const currentTasks = this.tasksSubject.getValue();
    const updatedTasks: ITask[] = [...currentTasks, {...task, id: id}];
    this.tasksSubject.next(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  getMaxId(): number {
    const currentTasks = this.tasksSubject.getValue();
    return currentTasks.reduce((max, task) => {
      return task.id > max ? task.id : max;
    }, 0)
  }
}
