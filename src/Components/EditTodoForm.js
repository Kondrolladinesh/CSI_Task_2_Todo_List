import React, {useState} from 'react'
import { GrUpdate } from "react-icons/gr";

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);
    }
  return (
    <div className='TodoForm'>
        <form id="todoform" onSubmit={handleSubmit}>
            <input 
                type="text"
                value ={value}
                placeholder='update your task'
                onChange = {(e)=> setValue(e.target.value)}
                required
                autoComplete="off"></input>
            <button type='submit'>
                <GrUpdate/>
            </button>
        </form>
    </div>
  )
}
