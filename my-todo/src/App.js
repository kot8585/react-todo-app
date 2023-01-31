import React, {useState} from 'react';
import FilterTodo from './FilterTodo/FilterTodo';
import TodoList from './TodoList/TodoList';

const types = ['all', 'active', 'completed']
function App() {  
  const [type, setType] = useState(types[0]);

  return (
    <>
      <FilterTodo types={types} selectedType={type} changeType={(type) => setType(type)}/>
      <TodoList type={type}/>
    </>
  );
}

export default App;
