import React, {useState} from 'react';
import { useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
  //❗️useState는 초기화할때 callback함수를 호출한다.
  //초기값에 readTodosFromLocalStorage() 함수를 넣으면 리렌더링될때마다 계속 호출됌
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());


  const handleAdd = (todo) => setTodos([...todos, todo]);
  //❗️ 이렇게도 짤 수 있구나. map에서 삼항연산자 쓰기
  const handleUpdate = (updated) => setTodos(todos.map(current => current.id === updated.id ? updated : current));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {
          filtered.map(item => (
            <Todo
              key={item.id} 
              todo={item} 
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              />))
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}

function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

//❗️함수를 밖으로 뺐다! 
//함수 내부의 특정 값이 필요하지 않은 경우는 컴포넌트 밖으로 함수를 빼내서 불필요하게 재선언되지 않도록 한다
function getFilteredItems(todos, filter){
  if(filter === 'all') {
    return todos;
  } 
  return todos.filter(todo => todo.status === filter);
}

