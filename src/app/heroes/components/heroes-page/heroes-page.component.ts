import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../models/hero.model'
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../../../shared/services/hero.service';
// import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../shared/services/user.service';

import { User } from '../../models/users.model';

// import { MessageService } from '../../../shared/services/message.service';

// import { heroTypes, heroTypeNames } from '../Constants/hero.constants';

import { FormBuilder, NgForm, NgModel, Validators } from '@angular/forms';


@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesComponent implements OnInit {

@ViewChild('heroesCreateForm') heroesCreateForm: NgForm;  

  // heroes = HEROES;
  heroes: Hero[] = [];


  // heroTypes = heroTypes;
  // heroTypeNames = heroTypeNames;

  // selectedHero: Hero;

  name = 'hero';

  users: User[];

  newHero = new Hero();

  // users = [
  //   {name: "hola"}
  // ];

  // constructor(private heroService: HeroService, private messageService: MessageService, private userService: UserService) { }
  constructor(
    private heroService: HeroService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  checkoutForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
    }
  );

  ngOnInit(): void {
    this.getHeroes();

    this.getUsersPromiseAsync();
  }

  // Versión 1 - A veces se usará
  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // // // Versión 2 - no recomendable (mejor usar promesas con async / await en vez de .then)
  getUsersPromise(): void {
    this.userService.getUsersPromise().then(data => {
      this.users = data;
    });
  }

  // // // Versión 3 - recomendable
  // async / await
  async getUsersPromiseAsync(): Promise<void> {
    this.users = await this.userService.getUsersPromiseAsync();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // } 

  // onChangeTextParent (text: string, hero : Hero): void {
  //   console.log("P: " + text);
  //   hero.name = text;
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }


  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => { this.heroes.push(hero); });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  // onClickAddHero(): void {
  //   this.add(this.newHero.name);
  //   this.newHero.name = '';
  // }

  // onSubmit(): void {
  //   if (this.checkoutForm.value.name) {
  //     this.add(this.checkoutForm.value.name);
  //     console.warn('Your order has been submitted', this.checkoutForm.value);
  //     this.checkoutForm.reset();
  //   }
    
  // }

  onSubmitHero(): void {
    this.add(this.newHero.name);
    // this.newHero.name = '';
    this.heroesCreateForm.resetForm();
  }

}
