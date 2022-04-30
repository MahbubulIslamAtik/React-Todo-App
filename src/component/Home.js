import React, { useState } from 'react'
import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from 'uuid'


// const dummytodos = [
//   {
//       id : 1,
//       title : "title 1",
//       desc : "description 1"
//   },
//   {
//       id : 2,
//       title : "title 2",
//       desc : "description 2"
//   }
// ]

const Home = () => {

  const [todos, setTodos] = useState([]);

  const getTodoHandler = ((data) => {
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), data}]
    });
    console.log(todos);
  })

  const handleRemoveTodo = ((id) => {
    setTodos((prevTodos) => {
      const filterTodos = prevTodos.filter((item) =>  item.id !== id );
      return filterTodos;
    })
  })
  return (
      <div className={style.container}>
        <h1 style={{ color:"white" }}>Todo App</h1>
        <NewTodo onTodo = {getTodoHandler} />
        <Todos todos = {todos} onRemoveTodo = {handleRemoveTodo} />
      </div>
  )
}

export default Home