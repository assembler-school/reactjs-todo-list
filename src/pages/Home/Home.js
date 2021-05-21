import React from "react";

import "./Home.scss";
import AppHeader from "../../components/AppHeader";
import Footer from "../../components/Footer";
import TodosList from "../../components/TodosList";
import NewTodoCard from "../../components/NewTodoCard";
import BgPicture from "../../components/BgPicture";

export default function Home({
  todos,
  handleCompleted,
  saveNewTodo,
  handleTodoChange,
  handleTodoDelete,
  activeTodos,
}) {
  return (
    <div className="mainBackground allWidth minHeight gridBody">
      <BgPicture />
      <main className="gridMain">
        <AppHeader />
        <section className="whiteBg roundedCorner shadow margBot">
          <NewTodoCard saveNewTodo={saveNewTodo} />
        </section>
        <TodosList
          todos={todos}
          handleCompleted={handleCompleted}
          handleTodoChange={handleTodoChange}
          handleTodoDelete={handleTodoDelete}
          activeTodos={activeTodos}
        />
      </main>
      <Footer />
    </div>
  );
}