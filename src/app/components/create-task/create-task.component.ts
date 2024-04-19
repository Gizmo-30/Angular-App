import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FocusDirective} from "../../directives/focus.directive";
import {TasksService} from "../../services/task.service";


@Component({
  selector: 'app-create-task',
  standalone: true,
  providers: [provideNativeDateAdapter(), TasksService],
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FocusDirective
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.sass'
})
export class CreateTaskComponent {
  constructor(private taskService: TasksService) {

  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(25)
    ]),
    priority: new FormControl<string>(''),
    deadline: new FormControl<string>(''),
    executor: new FormControl<string>(''),
    description: new FormControl<string>(''),
  })

  submit() {
    this.taskService.addTask(this.form.value)
  }
}
