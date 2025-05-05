import React from 'react'
import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from './TodoUpdate'
export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo
}) => {
  return (
  <li>
    <span  onclick={()=>handleCompleteTodo(todo.id)}>
     
        <label htmlFor="" className='container-done'></label>
    </span>

    <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo}/>
    <button className='btn-delete' 
    onClick={()=>handleDeleteTodo(todo.id)}>
      < FaTrash/> 
      </button>
  </li>
  )
}
