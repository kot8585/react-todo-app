import React, {useState} from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';


export default function TodoList() {
  const [todoList, setTodoList] = useState([{id: '1234', text: '냥냥', isCompleted: false}]);
  

  const handleAdd = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const handleChecked = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.isCompleted = !todo.isCompleted;

    setTodoList([...todoList]);
  };

  return (
    <section>
      <ul>
        {todoList.map((todo) => {
          return <Todo todo={todo} onChecked={handleChecked} onDelete={handleDelete}/>
        })}
      </ul>

      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}

