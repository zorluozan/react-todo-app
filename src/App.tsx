import { TodosProvider } from "./contexts/TodosContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import AddTodoForm from "./components/AddTodoForm";
import TodosList from "./components/TodosList";
import GlobalStyles from "./styles/GlobalStyles";
import TodosContainer from "./components/TodosContainer";
import TodosHeading from "./components/TodosHeading";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => {
  return (
    <DarkModeProvider>
      <TodosProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <TodosContainer>
            <TodosHeading />
            <AddTodoForm />
          </TodosContainer>
          <TodosList />
        </ThemeProvider>
      </TodosProvider>
    </DarkModeProvider>
  );
};

export default App;
