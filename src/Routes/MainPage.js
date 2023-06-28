import React, {useState} from 'react'
import "./MainPage.css";
import {v4 as uuidv4} from "uuid";
import { TodoForm } from '../Components/TodoForm';
import { Todo } from '../Components/Todo';
import { EditTodoForm } from '../Components/EditTodoForm';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
uuidv4();


const MainPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodoTask = (todo,duedate) => {
    setTodos([...todos, {id: new Date().getTime(), task: todo, dueDate: duedate,
      completed: false, isEditing: false }])
      // console.log(todos)
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div id= 'main'>
      <NavBar/>
      <div className='container'>
        <div className='header'>
          <TodoForm addTodo={addTodoTask} />
        </div>
        <div className='taskContainer'>
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                dueDate={todo.dueDate} 
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            )
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default MainPage
