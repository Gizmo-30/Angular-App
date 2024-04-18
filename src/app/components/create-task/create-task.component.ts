import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.sass'
})
export class CreateTaskComponent {

}
