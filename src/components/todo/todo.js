import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./todo.scss";

function Todo() {
  return (
    <li>
      <div>
        <input type="checkbox" />
        <span>Prueba 1</span>
      </div>
      <div className="prueba">
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </li>
  );
}

export default Todo;
