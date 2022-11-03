import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';

import { Todo } from '../tasks/models/todo.model';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = 'api/todos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getTodos(): Promise<Todo[]> {
    return firstValueFrom(this.http.get<Todo[]>(this.todoUrl))
      // .pipe(
      //   tap(_ => this.log('fetched values')),
      //   catchError(this.handleError<Todo[]>('getTodos', []))
      // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
