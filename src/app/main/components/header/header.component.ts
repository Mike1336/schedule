import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.items = [
        {
            label: 'Пользователь',
            items: [{
                    label: 'Профиль',
                    icon: 'pi pi-fw pi-user',
                    routerLink: ['/', 'profile'],
                },
                {
                  label: 'Выйти',
                  icon: 'pi pi-fw pi-power-off',
                }
            ]
        },
    ];
  }
}
