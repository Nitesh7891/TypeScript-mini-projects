import React from 'react'

interface Props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent<HTMLFormElement>)=>void;
}
const InputField = ({ todo, setTodo,handleAdd }: Props) => {
  
  return (
    <form 
    onSubmit={(e) => handleAdd(e)}
    className='input'>
        <input 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)}
        type="input" placeholder='Enter your task' className='input__box'  />
        <button className='input__submit' type="submit">Go</button>
    </form>
  )
}

export default InputField
