import { Component } from '@angular/core';
import { Imenu } from './shared/components/menu/models/IMenu.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: Imenu =
  {
    isDarkMode: false,
    menuItems: [
      {
        menuItemName: 'ItemA',
        menuItemRoute: 'page1',
      },
      {
        menuItemName: 'ItemB',
        menuItemRoute: 'page2',
      },
      {
        menuItemName: 'ItemC',
        menuItemRoute: 'page3',
      }
    ]
  }
  title = 'btg-marvel';
}
