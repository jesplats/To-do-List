import React from 'react'
import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from './TodoUpdate'
export const TodoItem = () => {
  return (
  <li>
    <span>
        <label htmlFor="" className='container-done'></label>
    </span>

    <TodoUpdate/>
    <button className='btn-delete'>< FaTrash/> </button>
  </li>
  )
}
