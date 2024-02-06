import { useContext } from "react";
import { Modal } from "./Modal";
import { TasksContext } from "../context/TasksContext";

const ClearTask = () => {
  const { tasks, clearCompletedTasks } = useContext(TasksContext);
  return (
    <>
    <button className="btn btn-dark" disabled={tasks.length === 0}>
      Clear All Task
    </button>
      <button
        className="btn btn-dark"
        id="clear-completed-tasks"
        data-bs-toggle="modal"
        data-bs-target="#clearCompletedTasks"
        disabled={tasks.filter((task) => task.isCompleted).length === 0}>
        Clear Completed Tasks
      </button>
      <Modal id="clearCompletedTasks" handleDelete={clearCompletedTasks} />
    </>
  );
};

export { ClearTask };
