import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Todo } from "../../store/todo.interfaces";
import { add_todo, remove_todo, toggle_todo } from "../../store/todo.actions";

@Component({
  selector: "app-input-todo",
  templateUrl: "./input-todo.component.html",
  styleUrls: ["./input-todo.component.css"]
})
export class InputTodoComponent implements OnInit {
  todoTitle: string;
  constructor(private store: Store<{ todoState: Array<Todo> }>) {}

  ngOnInit() {}

  addTodo() {
      if(this.todoTitle != '') {
      let todoItem = {
        id: Date.now(),
        title: this.todoTitle,
        status: false
      }
      // this.todos.push(todoItem)
      this.store.dispatch(add_todo(todoItem))
    }
    this.todoTitle = ""
  }
}
