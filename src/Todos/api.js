import toast from "react-hot-toast";
import actions from "./actions";
import fetch from "./fetch";

const getTodos = async (dispatch) => {
  try {
    const todos = await fetch("/todo", "GET");
    dispatch({
      type: actions.GET,
      payload: todos,
    });
  } catch (error) {
    toast.error("Failed to fetch todos");
  }
};

const addTodo = async (dispatch, todo) => {
  try {
    const newTodo = await fetch("/todo", "POST", todo);
    dispatch({
      type: actions.ADD,
      payload: newTodo,
    });
    toast.success("Added successfully");
  } catch (error) {
    console.log("my error = ", error.message);
    toast.error("Failed to add new todo");
  }
};

const deleteTodo = async (dispatch, id) => {
  try {
    await fetch("/todo/" + id, "DELETE");
    dispatch({
      type: actions.DELETE,
      payload: id,
    });
    toast.success("Deleted successfully");
  } catch (error) {
    toast.error("Failed to delete todo");
  }
};

const updateTodo = async (dispatch, todo) => {
  try {
    await fetch("/todo/" + todo.id, "PUT", todo);
    dispatch({
      type: actions.UPDATE,
      payload: todo,
    });
    toast.success("Updated successfully");
  } catch (error) {
    toast.error("Failed to update todo");
  }
};

export default {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};
