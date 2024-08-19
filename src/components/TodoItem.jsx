//this file puts the input data onto the frotend
import { MdDeleteForever } from "react-icons/md";
function TodoItem({ todoName, todoDate, handleDeleteBtnClick }) {
  return (
    <div class="row kg-row">
      <div class="col-5 col">{todoName}</div>
      <div class="col-5 col">{todoDate}</div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-danger delete-btn"
          onClick={() => {
            handleDeleteBtnClick(todoName, todoDate);
          }}
        >
          <MdDeleteForever size={22} />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
