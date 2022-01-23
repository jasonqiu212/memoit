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
    <div className="col-md-9 ms-sm-auto main-content h-100">
      <h2>All Tasks</h2>
      {tasksData &&
        tasksData.map((task, key) => {
          return (
            <div key={key}>
              <Task task={task} />
              <br />
            </div>
          );
        })}
    </div>
  );
}

export default AllTasks;
