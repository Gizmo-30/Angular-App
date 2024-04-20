import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../models/task";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {SelectionModel} from "@angular/cdk/collections";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {TasksService} from "../../services/task.service";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-task',
  standalone: true,
  providers: [TasksService],
  imports: [
    MatCardHeader,
    MatCardActions,
    MatCard,
    MatButton,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    RouterLink,
    MatIcon,
    MatAnchor,
    MatTableModule,
    MatCheckboxModule,
    NgClass,
    MatFormField,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSidenav,
    MatSidenavContent,
    RouterOutlet,
    MatSidenavContainer,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.sass'
})
export class TaskComponent implements OnInit{
  constructor( public taskService: TasksService) {}

  displayedColumns: string[] = ['select', 'title', 'deadline', 'priority', 'executor'];
  selection = new SelectionModel<ITask>(true, []);

  ngOnInit(): void {
    this.taskService.getTasks().subscribe();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.taskService.data.length;
    return numSelected === numRows;
  }

}
