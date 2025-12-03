import { useState } from "react";
import { useGetTodosQuery } from "../services/todosApi";
import Todo from "./Todo";
export default function List() {
  const [edit, setEdit] = useState();

  const { data: todos = [] } = useGetTodosQuery();

  if (!todos.length)
    return <p className="display-6 text-center mt-4">List is Empty</p>;

  return (
    <>
      <h4 className="mt-4">Todo List</h4>
      <ol className="list-group list-group-flush">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} edit={edit} setEdit={setEdit} />
        ))}
      </ol>
    </>
  );
}
