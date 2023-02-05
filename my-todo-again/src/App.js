import './App.css';
import {useState} from 'react';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import { ThemeProvider } from './context/ThemeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  const handleFilter = (filter) => {
    setFilter(filter);
  }

  
  return (
    <ThemeProvider>
      <Header filters={filters} filter={filter} handleFilter={handleFilter}/>
      <Todos filter={filter}/>
    </ThemeProvider>
  );
}

export default App;
