import React from 'react';

export default function FilterTodo({changeType}) {
  const handleClick = (e) => {
   changeType(e.target.className);
  }

  return (
    <header>
      <ul onClick={handleClick}>
        <li><button className="all">all</button></li>
        <li><button className="active">active</button></li>
        <li><button className="completed">completed</button></li>
      </ul>
    </header>
  );
}

