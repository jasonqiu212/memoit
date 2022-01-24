import axios from "axios";
import React, { useEffect, useState } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import EditTask from "./EditTask";

function Tasks(props) {
  const [taskToEdit, setTaskToEdit] = useState({
    id: -1,
    title: "",
    description: "",
    tagID: -1,
  });
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

  const changeCompletedStatus = (completed, id) => {
    axios
      .put(
        "http://localhost:3000/tasks/completedStatus",
        {
          task: {
            completed: !completed,
            id: id,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTask = (id) => {
    const link = "http://localhost:3000/tasks/" + id;
    axios
      .delete(link, { withCredentials: true })
      .then((response) => {
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editTask = (task) => {
    setTaskToEdit({
      id: task.id,
      title: task.title,
      description: task.description,
      tagID: task.tag_id,
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="d-flex flex-column col-md-9 ms-sm-auto main-content h-100 py-4 px-5">
      <NewTask />
      <EditTask taskToEdit={taskToEdit} />
      <h3 className="fw-bold">
        <i className="bi bi-star-fill star-icon"></i>
        {"   "}All
      </h3>
      <div className="py-2 mb-auto overflow-auto">
        {tasksData &&
          tasksData.map((task, key) => {
            return (
              <Task
                task={task}
                key={key}
                changeCompletedStatus={changeCompletedStatus}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            );
          })}
      </div>
      <hr />
      <div
        className="d-flex add-btn p-1 me-auto"
        data-bs-toggle="modal"
        data-bs-target="#newTask"
      >
        <i className="bi bi-plus-lg"></i>
        <p className="my-0">New task</p>
      </div>
    </div>
  );
}

export default Tasks;
