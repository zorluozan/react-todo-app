import { useTodos } from "../contexts/TodosContext";
import { ITodo } from "../types/todo";

type Props = {
  todo: ITodo;
};

const TodosItem = ({ todo }: Props) => {
  const { handleStatusChange, handleDeleteTodo } = useTodos();
  return (
    <div>
      <p>{todo?.description}</p>
      <input
        type="checkbox"
        name="isCompleted"
        checked={todo.isCompleted}
        onChange={(e) => handleStatusChange(e, todo.id)}
      />
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete todo</button>
    </div>
  );
};

export default TodosItem;
