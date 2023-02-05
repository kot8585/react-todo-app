import React, {useState} from 'react';
import { useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './Todos.module.css'

export default function Todos({filter}) {

  const [todos, setTodos] = useState(() => {
    const list = localStorage.getItem('todos');
    return list ? JSON.parse(list) : [];
});


  const handleCheck = (selectedTodo) => {
    console.log('check');
    console.log(selectedTodo.id);
    console.log(selectedTodo.isCompleted);
    
    setTodos(todos.map(todo => {
      return todo.id===selectedTodo.id ? selectedTodo : todo;
    }))
  }

  const handleDelete = (selectedTodo) => {
    console.log(selectedTodo);
    setTodos(todos.filter((todo) => todo.id !== selectedTodo.id));
  }

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  }

  useEffect(() => {
    console.log('로컬스토리지 저장');
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const filterTodos = () => {
    if(!todos) return [];
    switch(filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.isCompleted);
      case 'completed': 
        return todos.filter(todo => todo.isCompleted);
      default:
        throw new Error('해당 타입 없음');
    }
  }
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
      {filterTodos().map((todo) => (
        <Todo key={todo.id} todo={todo} handleCheck={handleCheck} handleDelete={handleDelete}/>
      ))}
      </ul>
      <AddTodo handleAdd={handleAdd} />
    </section>
  );
}

