import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    InitialRoutingModule,
    SharedModule,
  ],
  exports: [
    AppComponent
  ],
})
export class InitialModule { }
