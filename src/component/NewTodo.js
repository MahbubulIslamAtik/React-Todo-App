import React, {useState} from 'react'
import style from './NewTodo.module.css'

const NewTodo = (props) => {
    const [todo, setTodos] = useState({title: "", desc : ""});
    const {title, desc} = todo;

    const changeValue = (e) => {
        const name = e.target.name;
        setTodos((oldValue) => {
            return {...oldValue, [name]: e.target.value}
        })
    } 
    const submitHandler = (e) => {
        e.preventDefault();
        props.onTodo(todo);
        setTodos({title: "", desc: ""})
    }

  return (
      <form className={style.form} onSubmit={submitHandler}>
          <div className={style["form-field"]}>
              <label>Title: </label>
              <input 
                type='text' 
                id='title' 
                name='title' 
                placeholder='Enter your title.'
                value={title}
                onChange={changeValue}
                />
          </div>

          <div className={style["form-field"]}>
              <label>Description: </label>
              <textarea 
                id='desc' 
                name='desc'
                value={desc}
                onChange={changeValue}
                ></textarea>
          </div>

          <div>
              <button type='submit' className=''>Add Todo</button>
          </div>
      </form>
  )
}

export default NewTodo