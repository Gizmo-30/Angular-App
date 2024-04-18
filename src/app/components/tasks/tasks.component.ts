import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {JsonPipe, NgIf} from "@angular/common";
import {TaskComponent} from "../task/task.component";
import {ITask} from "../../models/task";
import {tasks as data} from "../../data/tasks";
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskComponent} from "../create-task/create-task.component";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    TaskComponent,
    JsonPipe
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.sass'
})
export class TasksComponent {
  tasks: ITask[] = data
  constructor(public dialog: MatDialog, private localStorageService: TaskService) {}

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent);
  }

  storage: any;
  ngOnInit(): void {
    this.localStorageService.storage$.subscribe({
      next: (res: any) => {
        this.storage = res;
      },
    });
  }

  public createLocalData(): void {
    this.localStorageService.setItem('tasks', data[0]);
  }
}
