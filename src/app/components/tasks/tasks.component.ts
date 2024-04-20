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
export class TasksComponent{
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent);
  }

}
