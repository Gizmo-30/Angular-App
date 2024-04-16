import {Component, Input} from '@angular/core';
import {ITask} from "../../models/task";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {CreateTaskComponent} from "../create-task/create-task.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {tasks} from "../../data/tasks";
import {NgClass} from "@angular/common";

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
    NgClass
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
  // checkboxLabel(row?: ITask): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  // }
}
