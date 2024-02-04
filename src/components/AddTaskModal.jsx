import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksContext } from "../context/TasksContext";
import { ADD_TASK_MODAL_ID } from "../constants";

const AddTaskModal = () => {
  const [taskLabel, setTaskLabel] = useState("");
  const { addTask, priority, handlePriorityChange } = useContext(TasksContext);

  const handleAddTask = () => {
    if (taskLabel.trim() === "") {
      return;
    }

    const newTask = {
      taskId: `task-${uuidv4()}`,
      label: taskLabel.trim(),
      priority,
      isCompleted: false,
    };

    addTask(newTask);

    setTaskLabel("");
  };

  const handleChange = (e) => {
    setTaskLabel(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      document.getElementById("add-task-button").click();
    }
  };

  return (
    <div
      className="modal fade"
      id={ADD_TASK_MODAL_ID}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby={`${ADD_TASK_MODAL_ID}Label`}
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${ADD_TASK_MODAL_ID}Label`}>
              Create a new task
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <h6>Task:</h6>
              <input
                id="newTaskText"
                type="text"
                className="form-control w-100"
                placeholder="What do you need to do today?"
                aria-label="What do you need to do today?"
                aria-describedby="task-input"
                value={taskLabel}
                onChange={handleChange}
                onKeyDown={handleEnterKey}
              />
            </div>
            <div className="mb-3">
              <h6>Priority:</h6>
              <select
              id="select-priority"
                className="form-select priority"
                value={priority}
                onChange={handlePriorityChange}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              id="add-task-button"
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="modal"
              onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddTaskModal };
