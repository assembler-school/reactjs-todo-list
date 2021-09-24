import React from "react"
import TodoItem from "../TodoItem"
import TodoItemEditing from "../TodoItemEditing"
import "./TodoList.scss"

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    const { todos, handleDelete, handleCheckbox, handleEdit, handleEditName } = this.props
    return (
      <ul data-testid="todos-list" className="w-100 mt-4 bg-white todo-list">
        {todos.map(todo => {
          { if (todo.isEditing === false) return <TodoItem handleDelete={handleDelete} handleCheckbox={handleCheckbox} handleEdit={handleEdit} key={todo.id} todo={todo} />
            else if (todo.isEditing === true) return <TodoItemEditing handleEdit={handleEdit} handleEditName={handleEditName} key={todo.id} todo={todo} />}
        })}
      </ul>
    )
  }
}