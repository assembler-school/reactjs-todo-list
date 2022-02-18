import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./sass/main.scss";
import img from "./img/motivation.jpg";
import { data } from "./utils/data";
import makeNewId from "./utils/hash";

// Components
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDoItems, setToDoItems] = useState(data);
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const completedTodos = toDoItems.filter((item) => item.done === true);
  const activeTodos = toDoItems.filter((item) => item.done !== true);

  const routes = [
    { path: "/", data: toDoItems },
    { path: "/completed", data: completedTodos },
    { path: "/active", data: activeTodos },
  ];

  // Create New Item
  function handleChange(event) {
    setValue(event.target.value);
    setIsEmpty(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Empty error
    if (value === "") {
      setIsEmpty(true);
      return;
    }
    const newToDo = {
      id: makeNewId(),
      text: value,
      done: false,
      isEditing: false,
    };
    setToDoItems((prevState) => [newToDo, ...prevState]);
    setValue("");
  }
  // Delete
  function handleDelete(id) {
    const deleteIndex = toDoItems.find((index) => index.id === id);
    setToDoItems((prevState) => {
      const newState = prevState.filter((item) => item !== deleteIndex);
      return newState;
    });
  }
  // Is Completed
  function isCompleted(id) {
    const updateIndex = toDoItems.find((index) => index.id === id);
    const item = toDoItems.indexOf(updateIndex);
    const newState = Array.from(toDoItems);
    newState[item].done = !newState[item].done;
    setToDoItems(newState);
  }
  // Is Editing
  function toggleEditing(id) {
    const updateIndex = toDoItems.find((index) => index.id === id);
    const item = toDoItems.indexOf(updateIndex);
    const newState = Array.from(toDoItems);
    newState[item].isEditing = !newState[item].isEditing;
    setToDoItems(newState);
  }

  // Clear Completed Items
  function clearCompleted() {
    setToDoItems(activeTodos);
  }

  return (
    <BrowserRouter>
      <main className="">
        <header>
          <img src={img} alt="motivated person in the mountains" />
        </header>
        <section className="todo-list">
          <div className="main-header">
            <h1>TODO</h1>
            <button className="" type="button">
              <span className="material-icons-outlined md-48">light_mode</span>
            </button>
          </div>
          <CreateToDo
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            emptyError={isEmpty}
          />
          {routes.map((route) => (
            <Route key={route} path={route.path} exact>
              <ToDoList
                data={route.data}
                handleDelete={handleDelete}
                isCompleted={isCompleted}
                emptyError={isEmpty}
                toggleEditing={toggleEditing}
                handleClear={clearCompleted}
              />
            </Route>
          ))}
          {/* <h6>Drag and drop to reorder list</h6> */}
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
