import { Routes } from '@angular/router';
import {TaskDetailsComponent} from "./components/task-details/task-details.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details', component: TaskDetailsComponent}
];
