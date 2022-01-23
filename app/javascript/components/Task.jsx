import React from "react";

function Task(props) {
  return (
    <div className="row d-flex align-items-center py-1 task-item">
      <input
        type="checkbox"
        className="col-1 checkmark"
        checked={props.task.completed}
        onChange={(event) =>
          props.handleCompletedStatusChange(props.task.completed, props.task.id)
        }
      />
      <p className="fs-6 col-11 my-0 px-0">{props.task.title}</p>
    </div>
  );
}

export default Task;
