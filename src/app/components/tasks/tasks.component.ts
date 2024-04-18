import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {TaskComponent} from "../task/task.component";
import {ITask} from "../../models/task";
import {tasks as data} from "../../data/tasks";
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskComponent} from "../create-task/create-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.sass'
})
export class TasksComponent {
  tasks: ITask[] = data
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent);
  }
}
