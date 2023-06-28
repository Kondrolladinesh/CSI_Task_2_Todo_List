import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CustomInput from './CustomInput'

export const TodoForm = ({addTodo, addDate}) => {
    const [value, setValue] = useState("")
    const [date, setDate] = useState();
    const weekend = (date) => new Date() <= date;
    const handleSubmit = (e) =>{
        e.preventDefault();

        addTodo(value, date);
        // addDate(date);
        setValue('')
        setDate('')
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
        <div>
            <DatePicker className='datePicker'
                showTimeSelect
                filterDate={weekend}
                selected={date}
                customInput={<CustomInput />}
                onChange={date => setDate(date)}
                // dateFormat="dd.mm.yyyy"
            />
        </div>
    </div>
  )
}

