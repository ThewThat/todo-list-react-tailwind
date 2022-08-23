// import logo from './logo.svg';
import "./App.css";
import "./styles/output.css";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="w-full bg-gray-50">
      <header className="min-h-screen w-full sm:w-1/2 mx-auto">
        <TodoApp />
      </header>
    </div>
  );
};

export default App;
