import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../services/todosApi";

export default function Todo({ todo, edit, setEdit }) {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <li className="list-group-item list-group-item-light">
      {edit !== todo.id ? (
        <>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <input
                id={todo.id}
                type="checkbox"
                className="form-check-input me-2"
                checked={todo.completed}
                onChange={(e) =>
                  updateTodo({ ...todo, completed: e.target.checked })
                }
              />
              <label htmlFor={todo.id} className="form-check-label">
                {todo.title}
              </label>
            </div>
            <div>
              <input
                type="button"
                value="Edit"
                className="btn btn-sm btn-outline-success me-2"
                onClick={() => setEdit(todo.id)}
              />
              <input
                type="button"
                value="Delete"
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </div>
        </>
      ) : (
        <Edit todo={todo} setEdit={setEdit} />
      )}
    </li>
  );
}

const Edit = ({ todo, setEdit }) => {
  const [updateTodo] = useUpdateTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.edit.value.trim();
    if (!title) return;
    if (title === todo.title) {
      setEdit();
    } else {
      updateTodo({ ...todo, title });
      setEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center gap-2">
      <input
        className="form-control"
        type="text"
        name="edit"
        autoComplete="off"
        autoFocus
        defaultValue={todo.title}
      />
      <input
        type="button"
        value="Cancel"
        className="btn btn-sm btn-outline-danger"
        onClick={() => setEdit()}
      />
      <input
        type="submit"
        value="Update"
        className="btn btn-sm btn-outline-primary"
      />
    </form>
  );
};
