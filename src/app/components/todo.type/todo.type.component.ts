import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-type',
  templateUrl: './todo.type.component.html',
  styleUrls: ['./todo.type.component.scss']
})
export class TodoTypeComponent implements OnInit {

  @Input() userId: number | undefined;
  @Output() userIdChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
