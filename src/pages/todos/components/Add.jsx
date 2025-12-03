import { useRef } from "react";
import { useCreateTodoMutation } from "../services/todosApi";

export default function Add() {
  const inputRef = useRef();

  const [addTodo] = useCreateTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (!title) return;

    addTodo({
      title,
      completed: false,
    });

    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        ref={inputRef}
        required
        placeholder="Todo..."
        autoFocus
        className="form-control"
      />
      <div className="input-group-append">
        <input type="submit" value="Add Todo" className="btn btn-primary" />
      </div>
    </form>
  );
}
