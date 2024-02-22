import React ,{useState} from 'react'
import {useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import "./AddTodo.css"
// import { useSelector } fro m 'react-redux'

const AddTodo = () => {
   const [input,setInput]=useState("")
   const dispatch=useDispatch()

   const addTodoHandler=(e)=>{
   e.preventDefault()
   dispatch(addTodo(input))
   setInput("")
   }

  return (
    <div className='body'> 
     <form onSubmit={addTodoHandler}>
     <input className='input' type="text"placeholder='Add text' value={input} name="text" onChange={(e)=>setInput(e.target.value)}/> 
     <button className="submit" type='submit'>Submit</button>
   </form>
   </div>
 
  )
}

export default AddTodo


