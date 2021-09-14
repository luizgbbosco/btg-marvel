import { Component, Input, OnInit } from '@angular/core';
import { Imenu } from './models/IMenu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuValues: Imenu = {};

  constructor() {
   }

  ngOnInit(): void {
  }

}
