import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() text?: string;

  @Output() textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeText (text: string): void {
    console.log("CH: " + text);
    this.textChange.emit(text);
  }

}
