import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  
  todos: Todo[] = [];
  
  constructor( private taskService: TodoService ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.taskService.getTasks()
      .subscribe(todos => this.todos = todos);
  }

}
