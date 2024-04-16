import { Component } from '@angular/core';
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatLabel,
    MatHint,
    MatInput,
    MatTable,
    MatRow,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.sass'
})
export class TaskDetailsComponent {

}
