import React from 'react'
import type { Todo } from '../models';
import '../index.css';
import SingleTodo from './SingleTodo';
interface Props{
  todos:Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos,setTodos}:Props) => {

  return (
    <div className='todos'>
     {todos.map((todo)=>(
       <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
     ))}
    </div>
  )
}

export default TodoList
