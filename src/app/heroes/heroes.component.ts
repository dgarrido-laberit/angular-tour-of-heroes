import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } 
  
  onChangeTextParent (text: string, hero : Hero): void {
    console.log("P: " + text);
    hero.name = text;
  }
  
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
