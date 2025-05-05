import React from 'react'
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { useForm } from '../hooks/useForm'
export const TodoUpdate = ({todo,handleUpdateTodo}) => {
  
  const {updateDescription,onInputChange}=useForm({
    updateDescription:todo.description
  })


  const [disable, setdisable] = useState(true)

  
  const onSubmitUpdate = (e) => {
    e.preventDefault();
    if (updateDescription.length <= 1) return;
  
    const id = todo.id; // Cambiado de coma a punto y coma
    const description = updateDescription; // Cambiado de coma a punto y coma
  
    handleUpdateTodo(id, description);
  };
  
  return (
    <form onSubmit={onSubmitUpdate}>
     <input type="text" 
      className="input-update" 
      value={todo.description} 
      onChange={onInputChange}
      name='updateDescription'
      placeholder="Agregar tarea"
      />
    

     <button type="submit" className="btn-edit">

     <FaEdit />
     </button>
   </form>
  )
}
