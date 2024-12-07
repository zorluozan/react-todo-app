import styled from "styled-components";
import { useTodos } from "../contexts/TodosContext";
import { useDarkMode } from "../contexts/DarkModeContext";

interface StyledInputProps {
  isDarkMode: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  border-radius: 6px;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--color-very-dark-blue)" : "#fff"};
  padding: 1rem 2rem;
  width: 100%;
  height: 5.6rem;
  border: none;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
`;

const AddTodoForm = () => {
  const { handleAddTodo } = useTodos();
  const { darkMode } = useDarkMode();

  return (
    <StyledForm onSubmit={handleAddTodo}>
      <StyledInput
        type="text"
        name="description"
        id="description"
        placeholder="Create a new todo..."
        isDarkMode={darkMode}
      />
    </StyledForm>
  );
};

export default AddTodoForm;
