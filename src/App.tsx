import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;
