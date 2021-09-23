import React from "react"
import TodoItem from "../TodoItem"
import "./TodoList.scss"

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }
  

  render() {
    const { todos } = this.props
    return (
      <ul data-testid="todos-list" className="w-100 mt-4 bg-white todo-list">
        {todos.map(todo => {
          return <TodoItem handleCheckbox={this.handleCheckbox} key={todo.id} todo={todo} />
        })}
      </ul>
    )
  }
}