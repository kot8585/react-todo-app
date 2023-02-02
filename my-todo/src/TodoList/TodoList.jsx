import React, {useState} from 'react';
import { useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'


export default function TodoList({type}) {
  const [todoList, setTodoList] = useState([]);
  
  console.log('here', localStorage.getItem('todoList'));
  console.log('todo', todoList);


  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem('todoList')));
  }, []); 


  const handleAdd = (todo) => {
    console.log('먀먀');
    const todoListCopy = [...todoList, todo];
    localStorage.setItem('todoList', JSON.stringify(todoListCopy));
    setTodoList(todoListCopy);
  };

  //todo를 만들어서 전해주도록? 역할분리 고려해보기
  const handleDelete = (id) => {
    const todoListCopy = todoList.filter(todo => todo.id !== id);
    localStorage.setItem('todoList', JSON.stringify(todoListCopy));
    setTodoList(todoListCopy);
  };

  const handleChecked = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.isCompleted = !todo.isCompleted;
    const todoListCopy = [...todoList];

    localStorage.setItem('todoList', JSON.stringify(todoListCopy));
    setTodoList(todoListCopy);
  };

  const filterTodo = getFilteredItems(todoList, type);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterTodo.map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            onChecked={handleChecked} 
            onDelete={handleDelete}
          />
          )
        )}
      </ul>

      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}

function getFilteredItems(todoList, type)  {
  switch(type) {
      case 'all':
        return todoList;
      case 'active':
        return todoList.filter(todo => todo.isCompleted === false);
      case 'completed':
        return todoList.filter(todo => todo.isCompleted === true);
      default : 
        throw Error('알 수 없는 타입이다')
    }
}
