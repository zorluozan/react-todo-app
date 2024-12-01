import { useTodos } from "../contexts/TodosContext";

const filterOptions = ["All", "Active", "Passive"];

const FilterArea = () => {
  const { filteredTodos, setStatus, handleResetCompletedTodos } = useTodos();

  const isDisableClearButton =
    filteredTodos.length === 0 ||
    filteredTodos.filter((todo) => todo.isCompleted).length === 0;
  return (
    <>
      {filterOptions.map((option: string, index: number) => (
        <button
          key={index}
          onClick={() => setStatus(option)}
          disabled={filteredTodos.length === 0}
        >
          {option}
        </button>
      ))}
      <button
        onClick={handleResetCompletedTodos}
        disabled={isDisableClearButton}
      >
        Clear completed
      </button>
    </>
  );
};

export default FilterArea;
