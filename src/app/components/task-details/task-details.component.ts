import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {TasksService} from "../../services/task.service";
import {ITask} from "../../models/task";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-task-details',
  standalone: true,
  providers: [TasksService],
  imports: [
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    RouterLink,
    MatButton,
    NgIf
  ],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.sass'
})
export class TaskDetailsComponent implements OnInit{
  id: number
  task: ITask | undefined
  constructor(public route: ActivatedRoute, public taskService: TasksService) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const idParam = params.id;
      if (idParam !== undefined) {
        this.id = +idParam; // приведение к числу с помощью унарного плюса или parseInt
        this.taskService.getTasks().subscribe((tasks) => {
          this.task = tasks.find(e => e.id === this.id);
        });
      }
    });
  }
}
