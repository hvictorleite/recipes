import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  currentTab: string = 'recipes';

  selectTab (tabName: string) : void {
    this.currentTab = tabName;
  }
}
