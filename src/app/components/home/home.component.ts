import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {TaskComponent} from "../task/task.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButton, NgForOf, TaskComponent, NgIf, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
