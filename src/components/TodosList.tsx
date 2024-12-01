import { useTodos } from "../contexts/TodosContext";
import { ITodo } from "../types/todo";
import TodosItem from "./TodosItem";

const TodosList = () => {
  const { filteredTodos } = useTodos();

  return (
    <>
      {filteredTodos?.map((todo: ITodo, index: number) => {
        return <TodosItem todo={todo} key={index} />;
      })}
    </>
  );
};

export default TodosList;
