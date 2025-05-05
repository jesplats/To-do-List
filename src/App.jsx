import React from 'react'
import './App.css'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'
export  const  App=()=> {
 

  return (
    <>
      
      <div className="card-to-do">
        <h1>Listas de tareas</h1>
        <div className="counter todos">

          <h3>N° Tareas :4</ h3>
          <h3> Pendientes</h3>
        </div>
              
              <div className="add-todo">
                <h3> Agregar Tarea</h3>
                <TodoAdd/>
              </div>
      <TodoList/>
      </div>


       
        
    </>
  )
}


