import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { todoId } from 'src/app/constants/todo.constants';

@Component({
  selector: 'app-todo-type',
  templateUrl: './todo.type.component.html',
  styleUrls: ['./todo.type.component.scss']
})
export class TodoTypeComponent implements OnInit {

  todoId = todoId;

  @Input() id: number | undefined;
  @Output() idChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
