import React from 'react'
import Todo from './Todo';
import style from './Todos.module.css'

const Todos = (props) => {
    console.log(props.todos);
  return (
    <section className={style.todos}>
            {props.todos.map((todo) => (<Todo todo = {todo.data} key = {todo.id} id={todo.id} onRemoveItem={props.onRemoveTodo} />))}
    </section>
  )
}

export default Todos