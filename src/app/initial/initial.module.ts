import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { AppComponent } from './components/app/app.component';


@NgModule({
  declarations: [
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
