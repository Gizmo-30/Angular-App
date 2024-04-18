import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    RouterLink,
    MatButton
  ],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.sass'
})
export class TaskDetailsComponent {

}
