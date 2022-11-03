import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { todoTypes, todoTypeNames } from 'src/app/constants/todo.constants';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // @Input() todo: Todo;

  @Input() userId: number | undefined;
  @Output() userIdChange = new EventEmitter<number>();

  @Input() id: number | undefined;
  @Output() idChange = new EventEmitter<number>();

  @Input() title: string | undefined;
  @Output() titleChange = new EventEmitter<string>();

  @Input() completed: boolean | undefined;
  @Output() completedChange = new EventEmitter<boolean>();

  todoTypes = todoTypes;
  todoTypeNames = todoTypeNames;

  constructor() { }

  ngOnInit(): void {
  }

}
