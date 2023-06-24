import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();

        addTodo(value);
        setValue('')
    }
  return (
    <div className='TodoForm'>
        <h1>ToDo App</h1> <h2>Master Your Productivity!</h2>
        <form id="todoform" onSubmit={handleSubmit}>
            <input 
                type="text"
                value ={value}
                placeholder='What is the task today?'
                onChange = {(e)=> setValue(e.target.value)}
                required
                autoComplete="off"></input>
            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

