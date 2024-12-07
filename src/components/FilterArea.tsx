import styled from "styled-components";
import { useTodos } from "../contexts/TodosContext";
import { useDarkMode } from "../contexts/DarkModeContext";

const filterOptions = ["All", "Active", "Passive"];

interface StyledProps {
  isDarkMode: boolean;
  className?: string;
}

const StyledFilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
`;

const StyledOption = styled.button<StyledProps>`
  color: ${(props: StyledProps) =>
    props.className === "active"
      ? "var(--color-primary)"
      : "var(--color-very-dark-grayish-blue)"};
  font-weight: ${(props: StyledProps) =>
    props.className === "active" ? 700 : 400};
  font-size: 1.4rem;

  &:hover {
    color: ${(props: StyledProps) =>
      props.className !== "active" && "var(--color-very-dark-blue)"};
    color: ${(props: StyledProps) => (props.isDarkMode ? "#fff" : "")};
  }
`;

const StyledText = styled.p`
  color: var(--color-very-dark-grayish-blue);
  font-size: 1.4rem;
`;

const StyledClearButton = styled.button<StyledProps>`
  font-size: 1.4rem;
  color: var(--color-dark-grayish-blue);

  &:hover {
    color: ${(props: StyledProps) =>
      props.isDarkMode ? "#fff" : "var(--color-very-dark-grayish-blue)"};
  }
`;

const FilterArea = () => {
  const { filteredTodos, status, setStatus, handleResetCompletedTodos } =
    useTodos();
  const { darkMode } = useDarkMode();

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
          className={status === option ? "active" : ""}
          isDarkMode={darkMode}
        >
          {option}
        </StyledOption>
      ))}
      <StyledClearButton
        onClick={handleResetCompletedTodos}
        disabled={isDisableClearButton}
        isDarkMode={darkMode}
      >
        Clear Completed
      </StyledClearButton>
    </StyledFilterArea>
  );
};

export default FilterArea;
