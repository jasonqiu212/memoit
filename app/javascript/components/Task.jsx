import React from "react";

function Task(props) {
  return (
    <div className="d-flex align-items-center p-1 task-item">
      <input
        type="checkbox"
        className="p-1"
        checked={props.task.completed}
        onChange={(event) =>
          props.changeCompletedStatus(props.task.completed, props.task.id)
        }
      />
      <div className="col d-flex flex-column">
        <p className="fs-6 my-0 ps-2 py-1">{props.task.title}</p>
        <p className="fs-6 my-0 ps-2 text-secondary">
          {props.task.description}
        </p>
      </div>

      <i
        className="bi bi-pencil-square ms-auto p-2 hide-edit"
        onClick={(event) => props.editTask(props.task)}
        data-bs-toggle="modal"
        data-bs-target="#editTask"
      ></i>
      <i
        className="bi bi-x-circle ms-auto p-2 hide-delete"
        onClick={(event) => props.deleteTask(props.task.id)}
      ></i>
    </div>
  );
}

export default Task;
