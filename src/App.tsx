import { useEffect, useState } from "react";

interface ITodo {
  id: string;
  description: string;
  isCompleted: boolean;
}

const filterOptions = ["All", "Active", "Passive"];

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") ?? "")
      : []
  );
  const [status, setStatus] = useState<string>("All");

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const description = (e.target as HTMLFormElement).description.value;
    const newTodo: ITodo = {
      id: crypto.randomUUID(),
      description,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    (e.target as HTMLFormElement).reset();
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    todoId: string
  ) => {
    const isCompleted = e.target.checked;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted } : todo
      )
    );
  };

  const handleResetCompletedTodos = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.isCompleted ? { ...todo, isCompleted: false } : todo
      )
    );
  };

  const handleFilterStatus = () => {
    if (status === "All") return todos;
    if (status === "Active") {
      return todos.filter((todo) => todo.isCompleted);
    }
    if (status === "Passive") {
      return todos.filter((todo) => !todo.isCompleted);
    }
    return todos;
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const dataToFiltered = handleFilterStatus();

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="description" id="description" />
        <button type="submit">Add Todo</button>
      </form>

      {dataToFiltered?.map((todo: ITodo, index: number) => {
        return (
          <div key={index}>
            <p>{todo?.description}</p>
            <input
              type="checkbox"
              name="isCompleted"
              checked={todo.isCompleted}
              onChange={(e) => handleStatusChange(e, todo.id)}
            />
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Delete todo
            </button>
          </div>
        );
      })}

      {filterOptions.map((option: string, index: number) => (
        <button key={index} onClick={() => setStatus(option)}>
          {option}
        </button>
      ))}

      <button onClick={handleResetCompletedTodos}>Clear completed</button>
    </>
  );
};

export default App;
