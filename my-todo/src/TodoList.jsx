import React, {useState} from 'react';
import AddTodo from './AddTodo';
import { BsFillTrashFill } from "react-icons/bs";


export default function TodoList() {
  const [todoList, setTodoList] = useState([{id: '1234', text: '냥냥', isCompleted: false}]);

  const handleAdd = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  return (
    <section>
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.text}<BsFillTrashFill onClick={() => handleDelete(todo.id)}/></li>
        })}
      </ul>

      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}

