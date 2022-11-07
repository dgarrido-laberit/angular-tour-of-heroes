import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroTypeComponent } from './components/hero-type/hero-type.component';
import { LabelComponent } from './components/label/label.component';
import { HeroesComponent } from './components/heroes-page/heroes-page.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroTypeComponent,
    HeroesComponent,
    LabelComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    DialogModule,
    TabViewModule,
    ButtonModule,
  ],
  exports: [
    HeroSearchComponent,
  ],
})
export class HeroesModule { }
