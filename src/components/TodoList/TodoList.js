/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Todo from "../Todo";
import "./TodoList.scss";

function TodoList() {
  return (
    <main className="main container">
      <section className="row">
        <Todo />
        <Todo />
        <Todo />
      </section>

      <section className="row main__footer">
        <span>5 items left</span>
        <div>
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Completed</button>
        </div>
        <button type="button">Clear completed</button>
      </section>
    </main>
  );
}

export default TodoList;
