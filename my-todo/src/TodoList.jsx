import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';


export default function TodoList() {
  const [todoList, setTodoList] = useState([{id: '1234', name: '냥냥', isCompleted: false}]);

  const addTodoHandler = (todo) => {
    setTodoList([...todoList, {id: uuidv4(), name:todo, isCompleted: false}]);
  };

  const handleDelete = (id) => {
    console.log(id);
  }

  return (
    <section>
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>
        })}
      </ul>

      <AddTodo onAdd={addTodoHandler}/>
    </section>
  );
}

