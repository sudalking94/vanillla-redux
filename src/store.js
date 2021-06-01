import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const totalState = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem("persistantState", JSON.stringify(totalState));
      return totalState;
    case DELETE:
      const deleteState = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem("persistantState", JSON.stringify(deleteState));
      return deleteState;
    default:
      let localState = localStorage.getItem("persistantState");
      localState = JSON.parse(localState);
      return localState;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
