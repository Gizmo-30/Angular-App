import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {ITask} from "../../models/task";
import {tasks as data} from "../../data/tasks";
import {TaskComponent} from "../task/task.component";
import {CreateTaskComponent} from "../create-task/create-task.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButton, NgForOf, TaskComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  tasks: ITask[] = data

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent);
  }
}
