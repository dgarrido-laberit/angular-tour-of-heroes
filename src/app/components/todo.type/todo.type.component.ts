import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { todoTypes, todoTypeNames } from 'src/app/constants/todo.constants';

@Component({
  selector: 'app-todo-type',
  templateUrl: './todo.type.component.html',
  styleUrls: ['./todo.type.component.scss']
})
export class TodoTypeComponent implements OnInit {

  @Input() userId: number | undefined;
  @Output() userIdChange = new EventEmitter<number>();

  todoTypes = todoTypes;
  todoTypeNames = todoTypeNames;

  constructor() { }

  ngOnInit(): void {
  }

}
