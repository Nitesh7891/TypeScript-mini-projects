import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import type { Todo } from "../models";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, todo: editTodo } : t
      )
    );

    setEdit(false);
  };

  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleDone = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  return (
    <form className="single_todo" onSubmit={handleEdit}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="single_todo_text"
        />
      ) : todo.isDone ? (
        <s className="single_todo_text">{todo.todo}</s>
      ) : (
        <span className="single_todo_text">{todo.todo}</span>
      )}

      <div className="icons">
        <FaEdit onClick={() => setEdit(!edit)} />
        <MdDelete onClick={handleDelete} />
        <IoCheckmarkOutline onClick={handleDone} />
      </div>
    </form>
  );
};

export default SingleTodo;