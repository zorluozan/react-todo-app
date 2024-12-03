import styled from "styled-components";
import { useTodos } from "../contexts/TodosContext";
import { ITodo } from "../types/todo";
import TodosItem from "./TodosItem";
import FilterArea from "./FilterArea";

const StyledList = styled.ul`
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  top: 25rem;
  width: 50rem;
  box-shadow: var(--shadow-lg);
`;

const TodosList = () => {
  const { filteredTodos } = useTodos();

  return (
    <StyledList>
      {filteredTodos?.map((todo: ITodo, index: number) => {
        return <TodosItem todo={todo} key={index} />;
      })}
      <FilterArea />
    </StyledList>
  );
};

export default TodosList;
