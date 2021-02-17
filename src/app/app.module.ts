import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { todoReducer } from "../store/todo.reducers";

import { TodoContainerComponent } from "./todo-container/todo-container.component";
import { InputTodoComponent } from "./input-todo/input-todo.component";
import { ListTodoComponent } from "./list-todo/list-todo.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      todoState: todoReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
      // logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  declarations: [
    AppComponent,
    TodoContainerComponent,
    InputTodoComponent,
    ListTodoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
