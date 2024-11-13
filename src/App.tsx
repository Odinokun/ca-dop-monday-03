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
      <ul>
        {todos.map((todo: TodoType) => (
          <li key={todo.id}>
            <div>userId = {todo.userId}</div>
            <div>id = {todo.id}</div>
            <div>
              <input type='checkbox' checked={todo.completed} /> title ={' '}
              {todo.title}
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
