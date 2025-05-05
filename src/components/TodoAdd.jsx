import React from 'react'
// import  {AddTodo} from '../hooks/useTodo'
export const TodoAdd = () => {
  return (
    <form>
    <input type="text" 
     className="input-update" 
     value="aprender js" 
     name="description"
     placeholder="Agregar tarea"
     />
   

    <button type="submit" className="btn-add">Agregar</button>
  </form>
  )
}
