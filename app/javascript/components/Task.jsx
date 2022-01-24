import React, { useState, useEffect } from "react";

function Task(props) {
  const [taskData, setTaskData] = useState(props.task);

  return (
    <div className="d-flex align-items-center p-1 task-item">
      <input
        type="checkbox"
        className="p-1"
        checked={taskData.completed}
        onChange={(event) =>
          props.changeCompletedStatus(taskData.completed, taskData.id)
        }
      />
      <div className="col d-flex flex-column">
        <p className="fs-6 my-0 ps-2 py-1">{taskData.title}</p>
        <p className="fs-6 my-0 ps-2 text-secondary">{taskData.description}</p>
      </div>

      <i
        className="bi bi-pencil-square ms-auto p-2 hide-edit"
        onClick={(event) => props.editTask(taskData)}
        data-bs-toggle="modal"
        data-bs-target="#editTask"
      ></i>
      <i
        className="bi bi-x-circle ms-auto p-2 hide-delete"
        onClick={(event) => props.deleteTask(taskData.id)}
      ></i>
    </div>
  );
}

export default Task;
