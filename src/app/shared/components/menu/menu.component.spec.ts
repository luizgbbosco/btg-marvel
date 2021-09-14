import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Imenu } from './models/IMenu.interface';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const mockTab: Imenu =
  {
    isDarkMode: true,
    menuItems: [
      {
        menuItemName: 'ItemA',
        menuItemRoute: 'routeA',
      },
      {
        menuItemName: 'ItemB',
        menuItemRoute: 'routeB',
      },
      {
        menuItemName: 'ItemC',
        menuItemRoute: 'routeC',
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.menuValues = mockTab;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
