import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

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

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const addTaskHandler = () => {
    const newTask = {
      userId: Math.random(),
      id: Math.random(),
      title: inputValue,
      completed: false,
    };
    setTodos([newTask, ...todos]);
    setInputValue('');
  };

  return (
    <div>
      <div>
        <Button name='Show me todos' onClick={showTodosHandler} />
        <Button name='Hide todos' onClick={hideTodosHandler} />
      </div>
      <br />

      <div>
        <input type='text' value={inputValue} onChange={inputChangeHandler} />
        <Button name='Add task' onClick={addTaskHandler} />
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
