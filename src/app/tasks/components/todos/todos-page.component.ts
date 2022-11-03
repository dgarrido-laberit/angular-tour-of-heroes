import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
  
  todos: Todo[] = [];
  
  constructor( private todoService: TodoService ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos(): Promise<void> {
    this.todos = await this.todoService.getTodos();
  }

}
