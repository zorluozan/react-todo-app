import styled from "styled-components";
import { useTodos } from "../contexts/TodosContext";

const filterOptions = ["All", "Active", "Passive"];

const StyledFilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
`;

const StyledOption = styled.button`
  color: var(--color-very-dark-grayish-blue);
  font-size: 1.4rem;
  font-weight: 400;
`;

const StyledText = styled.p`
  color: var(--color-very-dark-grayish-blue);
  font-size: 1.4rem;
`;

const StyledClearButton = styled.button`
  font-size: 1.4rem;
  color: var(--color-dark-grayish-blue);
`;

const FilterArea = () => {
  const { filteredTodos, setStatus, handleResetCompletedTodos } = useTodos();

  const isDisableClearButton =
    filteredTodos.length === 0 ||
    filteredTodos.filter((todo) => todo.isCompleted).length === 0;
  return (
    <StyledFilterArea>
      <StyledText>
        {filteredTodos.filter((item) => !item.isCompleted).length} items left
      </StyledText>
      {filterOptions.map((option: string, index: number) => (
        <StyledOption
          key={index}
          onClick={() => setStatus(option)}
          disabled={filteredTodos.length === 0}
        >
          {option}
        </StyledOption>
      ))}
      <StyledClearButton
        onClick={handleResetCompletedTodos}
        disabled={isDisableClearButton}
      >
        Clear Completed
      </StyledClearButton>
    </StyledFilterArea>
  );
};

export default FilterArea;
