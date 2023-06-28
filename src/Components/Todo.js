import React from 'react'
import { LuEdit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

export const Todo = ({task, dueDate,deleteTodo, editTodo, toggleComplete}) => {
  // const duedate = dueDate.toLocaleString();
  const duedate = dueDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  // console.log(dueDate);
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="Todo">
        <p1>{duedate}</p1>
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div className='form-icons'>
        <LuEdit onClick={() => editTodo(task.id)} />
        <RiDeleteBinLine  onClick={() => deleteTodo(task.id)} />
        </div>
    </div>

  )
}
