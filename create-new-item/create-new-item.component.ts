import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToDoObject} from '../entities/interfaces';
import {ToDoServiceService} from '../to-do-service.service';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.css']
})
export class CreateNewItemComponent implements OnInit {
  priorityValues: string[];
  form: FormGroup;
  constructor(private _fb: FormBuilder, private toDoService: ToDoServiceService) {
    this.priorityValues = ['High', 'Medium', 'Low'];
  }
  click(): void {
    let toDoItem: ToDoObject ;
    toDoItem = {
      text: this.form.value[0],
      priority: this.form.value[1]
    };
    this.toDoService.addToDoItem(toDoItem);
  }
  private _createForm(): FormGroup {
    return this._fb.group({
      message: '',
      priority: 'high'
    });
  }
  ngOnInit() {
    this.form = this._createForm();
  }

}
