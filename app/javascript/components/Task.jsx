import React from "react";

function Task(props) {
  return (
    <div>
      <h3>{props.task.title}</h3>
      <p>{props.task.description}</p>
    </div>
  );
}

export default Task;
