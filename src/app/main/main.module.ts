import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ScrollTopModule } from 'primeng/scrolltop';

import { HeaderComponent } from './components/header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    // PrimeNG
    MenubarModule,
    ButtonModule,
    ScrollTopModule,
    // Own
    MainRoutingModule,
  ],
})
export class MainModule { }
