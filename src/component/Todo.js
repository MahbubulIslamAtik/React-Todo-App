import React from 'react'
import style from './Todo.module.css'

const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id} = props;
    console.log(props.todo);

    const handleClicked = ((id) => {
        props.onRemoveItem(id);
    })
  return (
    <article  className={style.todo}>
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <div>
            <button
                className={style.btn}
                onClick={() => {
                    handleClicked(id)
                }}
            ><i className='fa fa-trash fa-2x'></i></button>
        </div>
    </article>
  )
}

export default Todo