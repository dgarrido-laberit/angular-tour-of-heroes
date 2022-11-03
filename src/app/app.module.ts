import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
// import { HeroesComponent } from './components/heroes/heroes.component';

// import { FormsModule } from '@angular/forms';
// import { HeroDetailComponent } from './heroes/components/hero-detail/hero-detail.component';
// import { LabelComponent } from './components/label/label.component';
import { MessagesComponent } from './components/messages/messages.component';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { HeroTypeComponent } from './heroes/components/hero-type/hero-type.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    // LabelComponent,
    MessagesComponent,
    DashboardComponent,
    // HeroTypeComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    TasksModule,
    SharedModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
