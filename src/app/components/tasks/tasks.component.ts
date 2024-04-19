import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {TaskComponent} from "../task/task.component";
import {ITask} from "../../models/task";
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskComponent} from "../create-task/create-task.component";
import {TasksService} from "../../services/task.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-tasks',
  standalone: true,
  providers: [TasksService],
  imports: [
    MatButton,
    NgIf,
    TaskComponent,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.sass'
})
export class TasksComponent implements OnInit{
  tasks$: Observable<ITask[]>
  loading = true
  constructor(public dialog: MatDialog, private taskService: TasksService ) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks().pipe(
      tap(() => this.loading = false)
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent);
  }

  addTask(newTask: ITask): void {
    this.taskService.addTask(newTask);
  }

}
