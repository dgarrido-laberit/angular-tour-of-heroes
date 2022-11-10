import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../models/hero.model'
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../../../shared/services/hero.service';
// import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../shared/services/user.service';

import { User } from '../../models/users.model';

// import { MessageService } from '../../../shared/services/message.service';

// import { heroTypes, heroTypeNames } from '../Constants/hero.constants';

import { FormBuilder, NgForm, NgModel, Validators } from '@angular/forms';

// import { ModelComponent } from '../../models/model-component.model';

import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
  styles: [
    `
        :host ::ng-deep .p-datatable > .p-datatable-wrapper {
            overflow: visible;
        }
        :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 5rem;
        }
        .layout-news-active :host ::ng-deep .p-datatable tr > th {
            top: 7rem;
        }
    `
]
})
export class HeroesComponent implements OnInit {

  @ViewChild('heroesCreateForm') heroesCreateForm: NgForm;

  // heroes = HEROES;
  heroes: Hero[] = [];
  // heroesTable: Hero[] = [];

  cols: any[];

  columnsWidth: number;

  first = 0;

  showTable = true;

  msgs1: Message[];

  displayModal: boolean = false;

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
    private ref: ChangeDetectorRef,
    // private messageService: MessageService,
    // private formBuilder: FormBuilder,
  ) { }

  // checkoutForm = this.formBuilder.group(
  //   {
  //     name: ['', Validators.required],
  //   }
  // );

  ngOnInit(): void {
    this.getHeroes();

    this.getUsersPromiseAsync();

    this.initTableCols();
  }

  initTableCols(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'typeId', header: 'TypeId' },
      { field: 'id', header: 'Id2' },
    ];

    this.columnsWidth = (1 / this.cols.length) * 100;
    console.log(this.columnsWidth);

    // this.columnsWidth = `Hero "${this.newHero.name}" added!`

    this.reloadTable();

  }

  // Versión 1 - A veces se usará
  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  /**
  * Fully refresh table component
  */
  reloadTable(): void {
    // this.ref.detectChanges();
    // this.first = 0;
    // this.heroesTable = [...this.heroes];
    this.showTable = false;
    this.ref.detectChanges();
    this.showTable = true;
    // this.ref.detectChanges();
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
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      // this.heroes = [...heroes];
    });
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

  onClickDelete(hero: Hero) {
    this.delete(hero);
    this.reloadTable();
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

  // onSubmitHero(): void {
  //   if (!this.newHero.name) return;
  //   // this.newHero.name = '';
  //   this.heroesCreateForm.resetForm();
  //   this.add(this.newHero.name);
  // }

  showModalDialog() {
    this.displayModal = true;
    this.clearMessages();
  }

  closeModalDialog() {
    this.displayModal = false;
    this.addMessages2();
    this.heroesCreateForm.resetForm();
    // this.showViaService();
  }

  closeModalDialogHide() {
    if (this.msgs1.length != 0) return;

    this.addMessages2();
    this.heroesCreateForm.resetForm();
    // this.showViaService();
  }

  onSubmitHero(): void {
    if (!this.newHero.name) return;

    this.add(this.newHero.name);
    this.displayModal = false;
    this.addMessages1();
    this.heroesCreateForm.resetForm();
    this.reloadTable();
    // this.showViaService();
  }

  addMessages1() {
    this.msgs1 = [
      { severity: 'success', summary: 'Success:', detail: `Hero "${this.newHero.name}" added!` },
    ];
  }

  addMessages2() {
    this.msgs1 = [
      { severity: 'info', summary: 'Info:', detail: 'Operation canceled!' },
    ];
  }

  clearMessages() {
    this.msgs1 = [];
  }

  // showViaService() {
  //   this.msgs1.forEach(element => {
  //     this.messageService.add(element); 
  //   });
  // }

}
