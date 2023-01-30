import React, {useState} from 'react';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';
import Todo from './Todo';


export default function TodoList() {
  const [todoList, setTodoList] = useState([{id: '1234', text: '냥냥', isCompleted: false}]);
  const [type, setType] = useState('all');
  

  const handleAdd = (todo) => {
    setTodoList([...todoList, todo]);
  };

  // 아.. todo에서 하는게 좋을것 같다면서 왜 또 이렇게 짰어. 생각안할래..
  const handleDelete = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const handleChecked = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.isCompleted = !todo.isCompleted;

    setTodoList([...todoList]);
  };

  const filterTodo = (type) => {
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

  const changeType = (type) => {
    setType(type);
  }

  return (
    <section>
      <FilterTodo changeType={changeType}/>
      <ul>
        {filterTodo(type).map((todo) => (
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

