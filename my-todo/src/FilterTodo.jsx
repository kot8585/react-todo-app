import React from 'react';

export default function FilterTodo({types, changeType}) {

  return (
    <header>
      <ul>
        {types.map((type, index) => (
          <li key={index}>
            <button onClick={() => changeType(type)}>{type}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

