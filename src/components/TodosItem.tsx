import styled from "styled-components";
import { useTodos } from "../contexts/TodosContext";
import { ITodo } from "../types/todo";

type Props = {
  todo: ITodo;
};

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.6rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-light-gray);
  }
`;

const StyledArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledText = styled.p`
  color: var(--color-very-dark-grayish-blue);
`;

const StyledButton = styled.button``;

const StyledCheckbox = styled.input`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 100%;
  border: 1px solid var(--color-light-grayish-blue);
  cursor: pointer;
  appearance: none;
  background-color: #fff;

  &:checked {
    background-image: var(--linear-gradient-color);
  }
`;

const TodosItem = ({ todo }: Props) => {
  const { handleStatusChange, handleDeleteTodo } = useTodos();
  return (
    <StyledItem>
      <StyledArea>
        <StyledCheckbox
          type="checkbox"
          name="isCompleted"
          checked={todo.isCompleted}
          onChange={(e) => handleStatusChange(e, todo.id)}
        />

        <StyledText>{todo?.description}</StyledText>
      </StyledArea>
      <StyledButton onClick={() => handleDeleteTodo(todo.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </StyledButton>
    </StyledItem>
  );
};

export default TodosItem;
