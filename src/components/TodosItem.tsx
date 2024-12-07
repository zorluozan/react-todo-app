import styled from "styled-components";
import { useTodos } from "../contexts/TodosContext";
import { ITodo } from "../types/todo";
import { useDarkMode } from "../contexts/DarkModeContext";

type Props = {
  todo: ITodo;
};

interface StyledTextProps {
  isDarkMode: boolean;
  className: string;
}

interface StyledInputProps {
  isDarkMode: boolean;
}

const StyledItem = styled.li<StyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.6rem;

  &:not(:last-child) {
    border-bottom: 1px solid
      ${(props: StyledInputProps) =>
        props.isDarkMode
          ? "var(--color-very-dark-desurated-blue)"
          : "var(--color-light-gray)"};
  }
`;

const StyledArea = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledText = styled.p<StyledTextProps>`
  text-decoration: ${(props) =>
    props.className === "checked" && "line-through"};
  color: ${(props: StyledTextProps) =>
    props.className === "checked"
      ? "var(--color-light-grayish-blue)"
      : props.isDarkMode
      ? "#fff"
      : "var(--color-very-dark-grayish-blue)"};
`;

const StyledButton = styled.button`
  height: 1.4rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    height: 1.8rem;
  }
`;

const StyledCheckbox = styled.input<StyledInputProps>`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 100%;
  border: ${(props: StyledInputProps) =>
    props.isDarkMode
      ? "1px solid var(--color-very-dark-grayish-blue)"
      : "1px solid var(--color-light-grayish-blue)"};
  cursor: pointer;
  appearance: none;
  background-color: ${(props: StyledInputProps) =>
    props.isDarkMode ? "transparent" : "#fff"};
  position: relative;

  &:checked {
    background-image: var(--linear-gradient-color);
  }

  &:checked::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.1rem;
    height: 1.1rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11'%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='2' d='M1 4.304L3.696 7l6-6'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const TodosItem = ({ todo }: Props) => {
  const { handleStatusChange, handleDeleteTodo } = useTodos();
  const { darkMode } = useDarkMode();

  return (
    <StyledItem isDarkMode={darkMode}>
      <StyledArea>
        <StyledCheckbox
          type="checkbox"
          name="isCompleted"
          checked={todo.isCompleted}
          onChange={(e) => handleStatusChange(e, todo.id)}
          isDarkMode={darkMode}
        />

        <StyledText
          className={todo.isCompleted ? "checked" : ""}
          isDarkMode={darkMode}
        >
          {todo?.description}
        </StyledText>
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
