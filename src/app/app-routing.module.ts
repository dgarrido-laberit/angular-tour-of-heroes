import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { TodosPageComponent } from './components/todos/todos-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'todos', component: TodosPageComponent },

  {path: '**', redirectTo: '', pathMatch: 'full'}, //Ruta cuando te equivocas de url (tiene que ir al final)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
