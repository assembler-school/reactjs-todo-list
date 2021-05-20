import React from "react";
// import { NavLink } from "react-router-dom";
import Todo from "../todo";

import "./todolist.scss";

function TodoList({ todos }) {
  // eslint-disable-next-line
  console.log({ todos });
  return (
    <section className="todo-list">
      <ul>
        <Todo />
      </ul>
      <footer>
        <div>5 items left</div>
        <div>
          <button type="button">All</button>
          <button type="button">Actived</button>
          <button type="button">Completed</button>
        </div>
        <div className="">Clear Completed</div>
      </footer>
    </section>
  );
}

export default TodoList;
