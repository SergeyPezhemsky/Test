import { Injectable } from '@angular/core';
import {ToDoObject} from './entities/interfaces';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  private url = 'http://127.0.0.1:3000/items';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  items: ToDoObject;
  constructor(private http: HttpClient) {
  }
  getToDoObject(): Observable<ToDoObject[]> {
    return this.http.get<ToDoObject[]>(this.url);
  }
  addToDoItem(item: ToDoObject) {
    return this.http.post<ToDoObject>(this.url, item.text, this.httpOptions).subscribe(items => {this.items = items; });
  }
}
