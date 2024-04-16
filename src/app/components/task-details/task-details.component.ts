import { Component } from '@angular/core';
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatLabel,
    MatHint,
    MatInput
  ],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.sass'
})
export class TaskDetailsComponent {

}
