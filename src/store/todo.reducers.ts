import { createReducer, on } from "@ngrx/store";
import { Todo } from "./todo.interfaces";
import { add_todo, remove_todo, toggle_todo } from "./todo.actions";

const initialState: Array<Todo> = [];

export const todoReducer = createReducer(
  initialState,
  on(add_todo, (state, action) => [...state, action]),

  on(remove_todo, (state, action) => state.filter(i => i.id !== action.id)),

  on(toggle_todo, (state, action) =>
    state.map(i => (i.id === action.id ? { ...i, status: !i.status } : i))
  )
);
