import { useTodos } from "../contexts/TodosContext";

const AddTodoForm = () => {
  const { handleAddTodo } = useTodos();
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Create a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
