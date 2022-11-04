import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroTypeComponent } from './components/hero-type/hero-type.component';
import { LabelComponent } from './components/label/label.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';


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
  ],
  exports: [
    HeroSearchComponent,
  ],
})
export class HeroesModule { }
