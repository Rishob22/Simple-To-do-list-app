import { useRef } from "react";
import { MdAddTask } from "react-icons/md";
import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  let todoName = useRef("");
  let todoDate = useRef("");
  const contextObj = useContext(todoItemsContext);
  let handleAddBtnClick = contextObj.handleAddBtnClick;
  return (
    <div class="row kg-row">
      <div class="col-5 col">
        <input type="text" placeholder="input todo here" ref={todoName} />
      </div>
      <div class="col-5 col">
        <input type="date" ref={todoDate} />
      </div>
      <div class="col-2 ">
        <button
          type="button"
          class="btn btn-success add-btn"
          onClick={() => {
            handleAddBtnClick(todoName.current.value, todoDate.current.value);
            todoDate.current.value = "";
            todoName.current.value = "";
          }}
        >
          <MdAddTask size={22} />
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
