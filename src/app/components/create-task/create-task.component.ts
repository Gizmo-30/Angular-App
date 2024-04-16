import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.sass'
})
export class CreateTaskComponent {

}
