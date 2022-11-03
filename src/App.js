import './App.css';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <AddTodo/>
   <TodoList/>
    </div>
  );
}

export default App;
