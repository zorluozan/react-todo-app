import styled from "styled-components";
import { useTodos } from "../contexts/TodosContext";
import { ITodo } from "../types/todo";
import TodosItem from "./TodosItem";
import FilterArea from "./FilterArea";
import { useDarkMode } from "../contexts/DarkModeContext";

interface StyledListProps {
  isDarkMode: boolean;
}

const StyledList = styled.ul<StyledListProps>`
  background-color: ${(props) =>
    props.isDarkMode ? "var(--color-very-dark-blue)" : "#fff"};
  border-radius: 8px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  top: 19rem;
  width: 35rem;
  box-shadow: var(--shadow-lg);

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    top: 25rem;
    width: 50rem;
  }
`;

const TodosList = () => {
  const { filteredTodos } = useTodos();
  const { darkMode } = useDarkMode();

  return (
    <StyledList isDarkMode={darkMode}>
      {filteredTodos?.map((todo: ITodo, index: number) => {
        return <TodosItem todo={todo} key={index} />;
      })}
      <FilterArea />
    </StyledList>
  );
};

export default TodosList;
