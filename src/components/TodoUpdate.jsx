import React from 'react'
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { useForm } from '../hooks/useForm'
import { useRef } from 'react';

export const TodoUpdate = ({todo,handleUpdateTodo}) => {
    const {updateDescription,onInputChange}=useForm({
    updateDescription:todo.description
  })

  const focusInputRef=useRef();

  const [disable, setdisable] = useState(true)

  
  const onSubmitUpdate = (e) => {
    e.preventDefault();
    if (updateDescription.length <= 1) return;
  
    const id = todo.id; // Cambiado de coma a punto y coma
    const description = updateDescription; // Cambiado de coma a punto y coma
  
    handleUpdateTodo(id, description);

    setdisable(!disable)
    focusInputRef.current.focus(); // Cambiado de coma a punto y coma
  };
  
  return (
    <form onSubmit={onSubmitUpdate}>
     <input type="text" 
      className={`input-update ${ 
        todo.done ? ' text-decoration-dashed' : '' 
       } `}   
       name='updateDescription'            
      value={updateDescription} 
      placeholder="Agregar tarea"
      onChange={onInputChange}
      readOnly={disable}
      ref={focusInputRef} // Cambiado de coma a punto y coma
      />
    

     <button type="submit" className="btn-edit">

     <FaEdit />
     </button>
   </form>
  )
}
