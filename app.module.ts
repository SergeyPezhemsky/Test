import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { CreateNewItemComponent } from './create-new-item/create-new-item.component';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxFormModule,
  DxListModule,
  DxSelectBoxModule,
  DxTextAreaModule,
  DxTextBoxModule
} from 'devextreme-angular';
import { ItemsAndFilterBarComponent } from './items-and-filter-bar/items-and-filter-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    CreateNewItemComponent,
    ItemsAndFilterBarComponent,
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextAreaModule,
    DxListModule,
    DxFormModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
