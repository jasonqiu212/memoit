import React, { useState, useEffect } from "react";

function Task(props) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [taskData, setTaskData] = useState(props.task);

  const handleEditTask = () => {
    // PUT REQUEST TO SERVER to edit server
  };

  useEffect(() => {
    handleEditTask();
  }, [taskData]);

  return (
    <div className="d-flex align-items-center p-1 task-item">
      <input
        type="checkbox"
        className="p-1"
        checked={taskData.completed}
        onChange={(event) =>
          props.handleCompletedStatusChange(taskData.completed, taskData.id)
        }
      />
      <div className="col d-flex flex-column">
        <p className="fs-6 my-0 ps-2">{taskData.title}</p>
        <p className="fs-6 my-0 ps-2 text-secondary">{taskData.description}</p>
      </div>

      <i className="bi bi-pencil-square ms-auto p-2 hide-edit"></i>
      <i
        className="bi bi-x-circle ms-auto p-2 hide-delete"
        onClick={(event) => props.handleTaskDelete(taskData.id)}
      ></i>
    </div>
  );
}

export default Task;
