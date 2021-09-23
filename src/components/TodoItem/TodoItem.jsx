import React from "react"
import "./TodoItem.scss"

export default class TodoItem extends React.Component {
  constructor({props}) {
    super(props)
    
  }

  

  render() {
    // const checked = this.props.todo.completed ? "checked" : "unchecked";
    // console.log(checked);
    const { task, handleCheckbox } = this.props.todo
    return (
      <li className="list-element d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input data-testid="create-todo-input" onChange={handleCheckbox} type="checkbox" />
          <p className="ml-2 mb-0">{task}</p>
        </div>
        <p className="mb-0 delete-task">&#10006;</p>
      </li>
    )
  }
}