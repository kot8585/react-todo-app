import React, {useState} from "react";
import AddTodo from "./AddTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todo) => {
    console.log(todo);
    setTodoList((prev) => [...prev, {name:todo, isCompleted: false}]);
  };
  
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => {return <li key={index}>{todo.name}</li>})}
      </ul>
      
      <AddTodo addTodoHandler={addTodoHandler}/>
    </div>
  );
}

export default App;
