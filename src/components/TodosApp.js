import React from "react";
import Header from "./Header";
import Action from "./Action";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import TodoModal from "./TodoModal";

class TodosApp extends React.Component {
  state = {
    todos: [],
    selectedTodo: undefined,
  };
  handleDeleteTodos = () => {
    this.setState(() => ({
      todos: [],
    }));
  };
  handleDeleteTodo = (todotoRemove) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todotoRemove !== todo),
    }));
  };

  handleAddTodo = (todo) => {
    if (!todo) {
      return "Enter valid value to add item";
    } else if (this.state.todos.indexOf(todo) > -1) {
      return "This todo already exists";
    }
    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo),
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.todos.length);
    const todo = this.state.todos[randomNum];
    this.setState(() => ({
      selectedTodo: todo,
    }));
  };

  handleClearSelectedTodo = () => {
    this.setState(() => ({
      selectedTodo: undefined,
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json);

      if (todos) {
        this.setState(() => ({ todos }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", json);
    }
  }

  render() {
    const subtitle = "Enter your todos to our app";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasTodos={this.state.todos.length > 0}
          handlePick={this.handlePick}
        />
        <Todos
          todos={this.state.todos}
          handleDeleteTodo={this.handleDeleteTodo}
          handleDeleteTodos={this.handleDeleteTodos}
        />
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <TodoModal
          selectedTodo={this.state.selectedTodo}
          handleClearSelectedTodo={this.handleClearSelectedTodo}
        />
      </div>
    );
  }
}

export default TodosApp;
