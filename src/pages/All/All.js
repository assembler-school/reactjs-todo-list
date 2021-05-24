import React from "react";
import Main from "../../components/Main";
import mountainImg from "../../img/mountain.jpg";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import CreateTodo from "../../components/CreateTodo";
import TodoListing from "../../components/TodoListing";
import NoTodos from "../../components/NoTodos";

function All({
  handleSubmit,
  handleChange,
  handleChecked,
  handleAddToComplete,
  todoName,
  isEmpty,
  allTodos,
  handleCompleted,
  handleSetCompleted,
  handleRemove,
  todoLength,
  handleEditTodo,
  handleAddToActive,
  ...props
}) {
  return (
    <Main {...props}>
      <div className="fullcontent">
        <div className="container-fluid, h40">
          <div className="gradient" />
          <img src={mountainImg} alt="Mountain background" />
        </div>
        <div className="container-fluid h60 bg-light" />
      </div>
      <section className="container-sm position-absolute d-flex flex-column p-0 mainContent">
        <AppHeader />
        <aside className="bg-light d-flex flex-row shadow rounded p-3 mb-4">
          <CreateTodo
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            todoName={todoName}
          />
        </aside>
        <article className="bg-light d-flex flex-column shadow rounded toContent">
          <div className="todoRender">
            {isEmpty && <NoTodos />}
            {!isEmpty && (
              <TodoListing
                allTodos={allTodos}
                handleSetCompleted={handleSetCompleted}
                handleCompleted={handleCompleted}
                handleRemove={handleRemove}
                handleChecked={handleChecked}
                handleAddToComplete={handleAddToComplete}
                handleAddToActive={handleAddToActive}
                handleEditTodo={handleEditTodo}
                onChange={handleChange}
              />
            )}
          </div>
          <AppFooter todoLength={todoLength} />
        </article>
      </section>
    </Main>
  );
}

export default All;
