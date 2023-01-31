import React, {useState} from 'react';
import FilterTodo from './FilterTodo';
import TodoList from './TodoList';

const types = ['all', 'active', 'completed']
function App() {  
  const [type, setType] = useState(types[0]);

  return (
    <div>
      <FilterTodo types={types} changeType={(type) => setType(type)}/>
      <TodoList type={type}/>
    </div>
  );
}

export default App;
