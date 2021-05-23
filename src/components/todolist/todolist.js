import React from "react";
import Todo from "../todo";
import "./todolist.scss";
import NoTodo from "../NoTodo";

function TodoList({
  todos,
  handleIsActive,
  deleteTodo,
  editTodo,
  handleIsEdit,
  displayHashtag,
}) {
  const completed = todos.filter((todo) => todo.isActive === true);
  const active = todos.filter((todo) => todo.isActive === false);

  if (todos.length === 0) {
    return <NoTodo />;
  }
  if (active > 0 && completed > 0) {
    return (
      <section className="todo-list">
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.content}
              isActive={todo.isActive}
              handleIsActive={handleIsActive}
              editTodo={editTodo}
              isEdit={todo.isEdit}
              handleIsEdit={handleIsEdit}
              deleteTodo={deleteTodo}
              hashtagDisplayed={todo.hashtagDisplayed}
              displayHashtag={displayHashtag}
            />
          ))}
        </ul>
      </section>
    );
  }
  if (active > 0 && completed === 0) {
    return (
      <section className="todo-list">
        <ul>
          <li>error</li>
        </ul>
      </section>
    );
  }
  return (
    <section className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            isActive={todo.isActive}
            handleIsActive={handleIsActive}
            editTodo={editTodo}
            isEdit={todo.isEdit}
            handleIsEdit={handleIsEdit}
            deleteTodo={deleteTodo}
            hashtagDisplayed={todo.hashtagDisplayed}
            displayHashtag={displayHashtag}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;