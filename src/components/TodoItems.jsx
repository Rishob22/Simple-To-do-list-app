import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const contextObj = useContext(todoItemsContext);
  const arr = contextObj.items;
  const handleDeleteBtnClick = contextObj.handleDeleteBtnClick;
  return (
    <div className={styles.itemsContainer}>
      {arr.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.date}
          handleDeleteBtnClick={handleDeleteBtnClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
