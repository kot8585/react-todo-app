import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({handleAdd}) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length <= 0) {
      setText('');
      return;
    }

    handleAdd({id: uuidv4(), text, isCompleted: false});
    setText('');
  }

  return (
    <footer className={styles.footer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" name='text' value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button className={styles.button} type='submit'>Add</button>
      </form>
    </footer>
  );
}

