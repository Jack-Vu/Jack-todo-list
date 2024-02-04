import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import { PriorityMapping } from "../constants";

const TaskItem = ({ task, setTaskToBeDeleted }) => {
  const { toggleTask, updateTaskLabel, handleEditPriority } =
    useContext(TasksContext);

  const { label, taskId, isCompleted, priority } = task;
  const [editMode, setEditMode] = useState(false);
  const [editedLabel, setEditedLabel] = useState(label);

  const handleChange = () => {
    toggleTask(taskId);
  };

  const switchToEditMode = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditedLabel(label);
    setEditMode(false);
  };

  const handleEdit = (e) => {
    setEditedLabel(e.target.value);
  };

  const handleSaveEdit = () => {
    updateTaskLabel(taskId, editedLabel);
    setEditMode(false);
  };

  const handleEditInputKeydown = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    }
  };
  const handleEditPriorityChange = (e) => {
    handleEditPriority(e, taskId);
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div id="label-container">
          {editMode ? (
            <input
              id="task-label-input"
              type="text"
              className="simple-input"
              value={editedLabel}
              onChange={handleEdit}
              onKeyDown={handleEditInputKeydown}
            />
          ) : (
            <>
              <input
                className="form-check-input me-1"
                type="checkbox"
                id={taskId}
                checked={isCompleted}
                onChange={handleChange}></input>
              <label
                className={`form-check-label ${isCompleted ? "completed" : ""}`}
                htmlFor={taskId}>
                {label}
              </label>
            </>
          )}
        </div>
        <div id="actions-container" className="d-flex column-gap-1">
          {editMode ? (
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example">
              <button
                type="button"
                className="btn btn-sm btn-dark"
                style={{ "--bs-btn-padding-y": ".1rem" }}
                onClick={handleSaveEdit}>
                Save
              </button>
              <button
                type="button"
                className="btn btn-sm btn-light"
                style={{ "--bs-btn-padding-y": ".1rem" }}
                onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className="dropdown">
                <div
                  className="priority-icon dropdown-toggle pointer"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i
                    className={`fa-solid ${PriorityMapping[priority].iconClass}`}></i>
                </div>
                <ul className="dropdown-menu priority-list">
                  <i
                    className="fa-solid fa-angles-up text-danger dropdown-item"
                    id="high"
                    key="high"
                    onClick={handleEditPriorityChange}></i>

                  <i
                    id="medium"
                    key="medium"
                    className="fa-solid fa-angle-up text-warning dropdown-item"
                    onClick={handleEditPriorityChange}></i>

                  <i
                    id="low"
                    key="low"
                    className="fa-solid fa-angle-down text-success dropdown-item"
                    onClick={handleEditPriorityChange}></i>
                </ul>
              </div>
              <div
                id="edit-button-container"
                className="pointer"
                onClick={switchToEditMode}>
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
              <div
                id="delete-button-container"
                className="pointer"
                data-bs-toggle="modal"
                data-bs-target="#taskListDeleteTask"
                onClick={() => {
                  setTaskToBeDeleted(task);
                }}>
                <i className="fa-solid fa-trash-can" aria-hidden="true"></i>
              </div>
            </>
          )}
        </div>
      </li>
    </>
  );
};

export { TaskItem };
