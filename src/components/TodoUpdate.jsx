import React from 'react'
import { FaEdit } from "react-icons/fa";
export const TodoUpdate = () => {
  return (
    <form>
     <input type="text" 
      className="input-update" 
      value="aprender js" 
      name="description"
      placeholder="Agregar tarea"
      />
    

     <button type="submit" className="btn-edit">

     <FaEdit />
     </button>
   </form>
  )
}
