import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TaskDetailsComponent} from "./components/task-details/task-details.component";
import {TasksComponent} from "./components/tasks/tasks.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details', component: TaskDetailsComponent},
  {path: 'tasks', component: TasksComponent},
];
