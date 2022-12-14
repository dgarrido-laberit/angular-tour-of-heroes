import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { HeroDetailComponent } from './heroes/components/hero-detail/hero-detail.component';
// import { TodosPageComponent } from './tasks/components/todos/todos-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },

  { path: '**', redirectTo: '', pathMatch: 'full' }, //Ruta cuando te equivocas de url (tiene que ir al final)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
