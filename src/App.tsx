import { useEffect, useState } from 'react';
import './App.css';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      //.then(json => console.log(json));
      .then(json => setTodos(json));
  }, []);

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <div>id = {todo.id}</div>
            <div> title = {todo.title}</div>
            <div> completed = {todo.completed ? 'true' : 'false'}</div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
