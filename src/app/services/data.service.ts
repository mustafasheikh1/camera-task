import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Camera } from '../models';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class DataService {

  private camerasUrl = 'api/cameras';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET camera from the server */
  getCameras(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.camerasUrl)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Camera[]>('getCamera', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}


