import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import './App.css';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const showTodosHandler = () => fetchTodos();
  const hideTodosHandler = () => setTodos([]);

  const addTodo = () => {
    const newTodo: TodoType = {
      userId: Math.random(),
      id: Math.random(),
      title: newTitle,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setNewTitle('');
  };

  return (
    <div>
      <div>
        <Button name='Show me todos' onClick={showTodosHandler} />
        <Button name='Hide todos' onClick={hideTodosHandler} />
      </div>
      <br />

      <div>
        <Input newTitle={newTitle} setNewTitle={setNewTitle} />
        <Button name='Add task' onClick={addTodo} />
      </div>

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
