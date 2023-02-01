import React, {useState} from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import FilterTodo from './FilterTodo/FilterTodo';
import TodoList from './TodoList/TodoList';

const types = ['all', 'active', 'completed'];

function App() {  
  const [type, setType] = useState(types[0]);

  return (
    <DarkModeProvider>
      <FilterTodo types={types} selectedType={type} changeType={(type) => setType(type)}/>
      <TodoList type={type}/>
    </DarkModeProvider>
  );
}

export default App;
