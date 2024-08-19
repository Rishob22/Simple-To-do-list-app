import { createContext, useReducer } from "react";
export const todoItemsContext = createContext({
  items: [],
  handleAddBtnClick: () => {},
  handleDeleteBtnClick: () => {},
});
const todoItemsReducer = (todoArr, action) => {
  let newTodoArr = todoArr;
  if (action.type == "ADD_NEW_ITEM") {
    newTodoArr = [
      ...todoArr,
      { name: action.payload.todoItem, date: action.payload.todoDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoArr = todoArr.filter(
      (item) =>
        item.name != action.payload.todoItem &&
        item.date != action.payload.todoDate
    );
  }
  return newTodoArr;
};
const TodoItemsContextProvider = ({ children }) => {
  const [todoArr, dispatchTodoArr] = useReducer(todoItemsReducer, []);
  const handleAddBtnClick = (todo, date) => {
    const addNewItem = {
      type: "ADD_NEW_ITEM",
      payload: {
        todoItem: todo,
        todoDate: date,
      },
    };
    dispatchTodoArr(addNewItem);
  };
  const handleDeleteBtnClick = (todo, date) => {
    const deleteTodo = {
      type: "DELETE_ITEM",
      payload: {
        todoItem: todo,
        todoDate: date,
      },
    };
    dispatchTodoArr(deleteTodo);
  };
  return (
    <todoItemsContext.Provider
      value={{
        items: todoArr,
        handleAddBtnClick: handleAddBtnClick,
        handleDeleteBtnClick: handleDeleteBtnClick,
      }}
    >
      {children}
    </todoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
