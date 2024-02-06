import { AddTaskModal } from "./AddTaskModal";
import { ADD_TASK_MODAL_ID } from "../constants";

const AddTask = () => {
  return (
    <>
      <button
        className="btn btn-dark "
        type="button"
        id="task-input"
        data-bs-toggle="modal"
        data-bs-target={`#${ADD_TASK_MODAL_ID}`}>
        <span>Add Task</span>
      </button>
      <AddTaskModal />
    </>
  );
};

export { AddTask };
