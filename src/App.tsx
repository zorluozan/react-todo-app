import { TodosProvider } from "./contexts/TodosContext";
import AddTodoForm from "./components/AddTodoForm";
import TodosList from "./components/TodosList";
import GlobalStyles from "./styles/GlobalStyles";
import TodosContainer from "./components/TodosContainer";
import TodosHeading from "./components/TodosHeading";

const App = () => {
  return (
    <TodosProvider>
      <GlobalStyles />
      <TodosContainer>
        <TodosHeading />
        <AddTodoForm />
      </TodosContainer>
      <TodosList />
    </TodosProvider>
  );
};

export default App;
