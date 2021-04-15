import React from "react";
const Todo = (props) => {
  return (
    <div>
      <p>{props.todoText}</p>
      <button
        onClick={(e) => {
          props.handleDeleteTodo(props.todoText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Todo;
