import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodosPageComponent } from './components/todos/todos-page.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodosPageComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
