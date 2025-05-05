import React from 'react'
import { useForm } from '../hooks/useForm'
// import  {AddTodo} from '../hooks/useTodo'
export const TodoAdd = ({handleNewTodo}) => {
  
  
  const {description,onInputChange,onResetForm}=useForm({
    description:'',
  })
  
  const onFormSubmit=(e)=>{
    e.preventDefault()
    if(description.length<=1) return

    let newTodo={
      id: new Date().getTime(),
      description:description,
      done:false
    }
    handleNewTodo(newTodo)
    onResetForm()

  }
  
  return (
    <form onSubmit={onFormSubmit}>
    <input type="text" 
     className="input-update" 
     value={description} 
     name="description"
      onChange={onInputChange}
     placeholder="Agregar tarea"
     />
   

    <button type="submit" className="btn-add">Agregar</button>
  </form>
  )
}
