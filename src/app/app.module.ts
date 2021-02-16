import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { TodoContainerComponent } from "./todo-container/todo-container.component";
import { InputTodoComponent } from './input-todo/input-todo.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoContainerComponent, InputTodoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
