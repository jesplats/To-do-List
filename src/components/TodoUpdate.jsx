import React from 'react'
import { FaEdit } from "react-icons/fa";
export const TodoUpdate = ({todo,handleUpdateTodo}) => {
  return (
    <form>
     <input type="text" 
      className="input-update" 
      value={todo.description} 
      name="description"
      placeholder="Agregar tarea"
      />
    

     <button type="submit" className="btn-edit">

     <FaEdit />
     </button>
   </form>
  )
}
