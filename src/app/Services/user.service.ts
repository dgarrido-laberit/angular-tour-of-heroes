import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';

import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Versión 1 - A veces se usará
  getUsers (): Observable<User[]> {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url = 'api/users';
    return this.http.get<User[]>(url);
  }

  // // // Versión 2 - no recomendable (mejor usar promesas con async / await en vez de .then)
  getUsersPromise (): Promise<User[]> {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url = 'api/users';
    return firstValueFrom(this.http.get<User[]>(url));
  }

  // // // Versión 3 - recomendable
  // async / await
  getUsersPromiseAsync (): Promise<User[]> {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url = 'api/users';
    return firstValueFrom(this.http.get<User[]>(url));
  }

}
