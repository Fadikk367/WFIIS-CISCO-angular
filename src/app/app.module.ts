import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todolist/todolist.component';
import { TodoPresenter } from './todo-presenter';

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [TodoPresenter],
  bootstrap: [AppComponent],
})
export class AppModule {}
