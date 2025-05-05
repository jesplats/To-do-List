import { useReducer } from "react";

export const useTodo = () => {
  const initialState = [];

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "Delete Todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleCompleteTodo = (id) => {
    const action = {
      type: "Complete Todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleUpdateTodo = (id, description) => {
    const action = {
      id: id,
      description: description,
    };
    dispatch(action);
  };
};
