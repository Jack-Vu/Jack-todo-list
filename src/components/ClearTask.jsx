import { useContext } from "react";
import { Modal } from "./Modal";
import { TasksContext } from "../context/TasksContext";

const ClearTask = () => {
  const { tasks, clearCompletedTasks, handleClearAllTask } =
    useContext(TasksContext);
  return (
    <div className="clear-buttons d-flex justify-content-between">
      <button
        className="btn btn-dark transition-btn clear-all"
        type="button"
        disabled={tasks.length === 0}
        onClick={handleClearAllTask}>
        <span>Clear All Tasks</span>
      </button>
      <button
        className="btn btn-dark transition-btn"
        type="button"
        id="clear-completed-tasks"
        data-bs-toggle="modal"
        data-bs-target="#clearCompletedTasks"
        disabled={tasks.filter((task) => task.isCompleted).length === 0}>
        <span>Clear Completed Tasks</span>
      </button>
      <Modal id="clearCompletedTasks" handleDelete={clearCompletedTasks} />
    </div>
  );
};

export { ClearTask };
