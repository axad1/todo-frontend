import API from "../../api";
import actions from "../actions";
import toast from "react-hot-toast";

const getTodos = () => async (dispatch) => {
  try {
    const todos = await API.getTodos();
    dispatch({
      type: actions.GET,
      payload: todos,
    });
  } catch (error) {
    toast.error("Failed to fetch todos");
  }
};

const addTodo = (todo) => async (dispatch) => {
  try {
    const newTodo = await API.addTodo(todo);
    dispatch({
      type: actions.ADD,
      payload: newTodo,
    });
    toast.success("Added successfully");
  } catch (error) {
    toast.error("Failed to add new todo");
  }
};

const deleteTodo = (id) => async (dispatch) => {
  try {
    await API.deleteTodo(id);
    dispatch({
      type: actions.DELETE,
      payload: id,
    });
    toast.success("Deleted successfully");
  } catch (error) {
    toast.error("Failed to delete todo");
  }
};

const updateTodo = (todo) => async (dispatch) => {
  try {
    await API.updateTodo(todo);
    dispatch({
      type: actions.UPDATE,
      payload: todo,
    });
    toast.success("Updated successfully");
  } catch (error) {
    toast.error("Failed to update todo");
  }
};

export { getTodos, addTodo, deleteTodo, updateTodo };
