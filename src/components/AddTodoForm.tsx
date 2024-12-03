import styled from "styled-components";
import { useTodos } from "../contexts/TodosContext";

const StyledInput = styled.input`
  border-radius: 6px;
  background-color: #fff;
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
  return (
    <StyledForm onSubmit={handleAddTodo}>
      <StyledInput
        type="text"
        name="description"
        id="description"
        placeholder="Create a new todo..."
      />
    </StyledForm>
  );
};

export default AddTodoForm;
