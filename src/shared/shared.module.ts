import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatBadgeModule
  ]
})
export class SharedModule { }
