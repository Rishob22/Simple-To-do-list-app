import { todoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const ErrorMessage = () => {
  let arr = useContext(todoItemsContext);
  return <div>{arr.length === 0 && "You are all set!"}</div>;
};
export default ErrorMessage;
