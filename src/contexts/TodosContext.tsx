import { createContext, useContext, useEffect, useState } from "react";
import { ITodo } from "../types/todo";

type Props = {
  children: React.ReactNode;
};

type TodosContextType = {
  filteredTodos: ITodo[];
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDeleteTodo: (id: string) => void;
  handleStatusChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    todoId: string
  ) => void;
  handleResetCompletedTodos: () => void;
  status: string;
  setStatus: (payload: string) => void;
};

const TodosContext = createContext<TodosContextType>({
  filteredTodos: [],
  handleAddTodo: () => {},
  handleDeleteTodo: () => {},
  handleStatusChange: () => {},
  handleResetCompletedTodos: () => {},
  status: "All",
  setStatus: () => {},
});

const TodosProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<ITodo[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") ?? "")
      : []
  );
  const [status, setStatus] = useState<string>("All");

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

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const filteredTodos = handleFilterStatus();

  const value = {
    filteredTodos,
    handleAddTodo,
    handleDeleteTodo,
    handleStatusChange,
    handleResetCompletedTodos,
    status,
    setStatus,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined)
    throw new Error("Context is undefined outside of app");
  return context;
};

export { useTodos, TodosProvider };
