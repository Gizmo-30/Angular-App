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
import {computeStartOfLinePositions} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/source_file";
import {FocusDirective} from "../../directives/focus.directive";


@Component({
  selector: 'app-create-task',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(25)
    ]),
    priority: new FormControl<string>(''),
    deadline: new FormControl<string>(''),
    executor: new FormControl<string>(''),
    description: new FormControl<string>(''),
  })

  get error() {
    return this.form.errors
  }

  submit() {
    console.log(this.form.controls.name.value)
  }
}
