import {Component, EventEmitter, Input, Output} from '@angular/core';
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
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskComponent} from "../create-task/create-task.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {tasks} from "../../data/tasks";
import {NgClass} from "@angular/common";
import {emit} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";

@Component({
  selector: 'app-task',
  standalone: true,
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
    MatSidenavContainer
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.sass'
})
export class TaskComponent {
  @Input() tasks: ITask[]

  displayedColumns: string[] = ['select', 'title', 'deadline', 'projects', 'members'];
  dataSource = new MatTableDataSource<ITask>(tasks);
  selection = new SelectionModel<ITask>(true, []);
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

}
