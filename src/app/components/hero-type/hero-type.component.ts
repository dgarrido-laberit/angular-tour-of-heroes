import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { heroTypes, heroTypeNames } from '../../constants/hero.constants';

@Component({
  selector: 'app-hero-type',
  templateUrl: './hero-type.component.html',
  styleUrls: ['./hero-type.component.scss']
})
export class HeroTypeComponent implements OnInit {

  // heroTypes = heroTypes;
  heroTypeNames = heroTypeNames;

  @Input() typeId?: number;
  @Output() typeIdChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
