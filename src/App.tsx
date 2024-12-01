import { TodosProvider } from "./contexts/TodosContext";
import AddTodoForm from "./components/AddTodoForm";
import TodosList from "./components/TodosList";
import FilterArea from "./components/FilterArea";

const App = () => {
  return (
    <TodosProvider>
      <AddTodoForm />
      <TodosList />
      <FilterArea />
    </TodosProvider>
  );
};

export default App;
