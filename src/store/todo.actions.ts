import { createAction, props } from "@ngrx/store";
import { Todo } from "./todo.interfaces";

export const add_todo = createAction("[Todo Component] Add", props<Todo>());

export const remove_todo = createAction(
  "[Todo Component] Remove",
  props<{ id: number }>()
);

export const toggle_todo = createAction(
  "[Todo Component] Toggle",
  props<{ id: number }>()
);
