import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteTodos}>Remove All</button>
      {props.todos.map((todo) => {
        return (
          <Todo
            key={todo}
            todoText={todo}
            handleDeleteTodo={props.handleDeleteTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
