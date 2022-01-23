import axios from "axios";
import React, { useEffect, useState } from "react";
import Task from "./Task";

function AllTasks(props) {
  const [tasksData, setTasksData] = useState("");

  const getTasks = () => {
    axios
      .get("http://localhost:3000/tasks/all", { withCredentials: true })
      .then((response) => {
        setTasksData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="col-md-9 ms-sm-auto main-content h-100 p-5">
      <h3 className="fw-bold">
        <i className="bi bi-star-fill star-icon"></i>
        {"   "}All
      </h3>
      <div className="py-2">
        {tasksData &&
          tasksData.map((task, key) => {
            return <Task task={task} key={key} />;
          })}
      </div>
    </div>
  );
}

export default AllTasks;
