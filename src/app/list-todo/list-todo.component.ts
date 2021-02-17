import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../../store/todo.interfaces";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-list-todo",
  templateUrl: "./list-todo.component.html",
  styleUrls: ["./list-todo.component.css"]
})
export class ListTodoComponent implements OnInit {
  list$: Observable<Todo[]>;
  constructor(private store: Store<{ todoState: Array<Todo> }>) {}

  ngOnInit() {
    this.list$ = this.store.select(state => state.todoState);
  }
}
