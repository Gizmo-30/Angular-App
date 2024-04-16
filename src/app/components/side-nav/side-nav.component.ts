import { Component } from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav} from "@angular/material/sidenav";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  standalone: true,
    imports: [
        MatListItem,
        MatNavList,
        MatSidenav,
        RouterLink
    ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.sass'
})
export class SideNavComponent {

}
