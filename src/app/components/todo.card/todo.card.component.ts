import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { todoTypes, todoTypeNames } from 'src/app/constants/todo.constants';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo.card.component.html',
  styleUrls: ['./todo.card.component.scss']
})
export class TodoTypeComponent implements OnInit {

  @Input() todo: Todo | undefined;
  // @Output() userIdChange = new EventEmitter<Todo>();

  todoTypes = todoTypes;
  todoTypeNames = todoTypeNames;

  constructor() { }

  ngOnInit(): void {
  }

}
