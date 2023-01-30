import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: '123', text: '장보기', status: 'active'},
    {id: '124', text: '공부하기', status: 'active'}
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  //❗️ 이렇게도 짤 수 있구나. map에서 삼항연산자 쓰기
  const handleUpdate = (updated) => setTodos(todos.map(current => current.id === updated.id ? updated : current));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));
  

  return (
    <section>
      <ul>
        {
          todos.map(item => (
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

