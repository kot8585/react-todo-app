import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({type}) {
  const [todoList, setTodoList] = useState([{id: '1234', text: '냥냥', isCompleted: false}]);

  const handleAdd = (todo) => {
    setTodoList([...todoList, todo]);
  };

  //todo를 만들어서 전해주도록? 역할분리 고려해보기
  const handleDelete = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const handleChecked = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.isCompleted = !todo.isCompleted;

    setTodoList([...todoList]);
  };

  const filterTodo = getFilteredItems(todoList, type);

  return (
    <section>
      <ul>
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
