import { Component, OnInit } from '@angular/core';
import {ToDoServiceService} from '../to-do-service.service';
import {ToDoObject} from '../entities/interfaces';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {async} from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './items-and-filter-bar.component.html',
  styleUrls: ['./items-and-filter-bar.component.css']
})
export class ItemsAndFilterBarComponent implements OnInit {
  constructor(private toDoService: ToDoServiceService) {}
  toDoItems: ToDoObject[];
  itemsSubject$$ = new BehaviorSubject<ToDoObject[]>([ ]);
  ngOnInit() {
   this.getToDoItem();
  }
   getToDoItem(): void {
    this.toDoService.getToDoObject()
    .subscribe(toDoItems => {
      this.itemsSubject$$.next(toDoItems);
    });
   }
}
