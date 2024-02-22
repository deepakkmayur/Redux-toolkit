import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Todos.css"
import {removeTodo} from "../features/todo/todoSlice"

const Todos = () => {
   const dispatch=useDispatch()


   const todoValues=useSelector((state)=>state.todos)
  return (
    <div className='body'>
   {todoValues.map((values)=>{
      return (
      <div className='display'>
         <h3 >{values.text}</h3>
         <h1 onClick={()=> dispatch(removeTodo(values.id))}>X</h1>  
      </div>
      )
   })}

    </div>
  )
}

export default Todos