import {ChangeDetectorRef, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MatGridList, MatGridTile, MatGridTileText} from "@angular/material/grid-list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MatGridList, MatGridTileText, MatGridTile, MatSidenav, MatSidenavContainer, MatSidenavContent, MatIconModule, MatSidenavContainer, MatSidenav, MatSidenavContent, MatRadioGroup, MatRadioButton, MatIconButton, MatToolbar, MatToolbarRow, MatNavList, MatListItem, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'task-tracker';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
