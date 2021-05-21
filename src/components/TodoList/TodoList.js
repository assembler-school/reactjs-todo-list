import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import EmptyTodo from "../EmptyTodo";
import Todo from "../Todo";
import "./TodoList.scss";

import { HOME, ACTIVE, COMPLETED } from "../../constatnts/routes";

function TodoList({
  todos = [],
  handleRemove,
  handleChangeCheck,
  handleEdit,
  handleEditSubmit,
  handleResetEdit,
}) {
  function printTodos() {
    return todos.map((todo) => (
      <Todo
        key={uuidv4()}
        handleChangeCheck={handleChangeCheck}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
        handleEditSubmit={handleEditSubmit}
        handleResetEdit={handleResetEdit}
        todo={todo}
      />
    ));
  }

  return (
    <main className="main">
      <section>{todos.length ? printTodos() : <EmptyTodo />}</section>

      <section className="main__footer">
        <span>{todos.filter((v) => !v.complete).length} items left</span>
        <div className="main__footer__lwrp">
          <Link className="main__footer__link" to={HOME}>
            All
          </Link>
          <Link className="main__footer__link" to={ACTIVE}>
            Active
          </Link>
          <Link className="main__footer__link" to={COMPLETED}>
            Completed
          </Link>
        </div>
        <button className="main__footer__link" type="button">
          Clear completed
        </button>
      </section>
    </main>
  );
}

export default TodoList;
