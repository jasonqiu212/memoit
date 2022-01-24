import axios from "axios";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import APIRoutes from "../utilities/routes";
import Task from "./Task";
import NewTask from "./NewTask";
import EditTask from "./EditTask";

function Tasks(props) {
  const currentTag = useOutletContext();
  const [taskToEdit, setTaskToEdit] = useState({
    id: -1,
    title: "",
    description: "",
    tagID: -1,
  });
  const [tasksData, setTasksData] = useState("");
  const [completedTasksData, setCompletedTasksData] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const getTasks = () => {
    if (currentTag.tagID == -1) {
      axios
        .get(APIRoutes.url + "/tasks/all", { withCredentials: true })
        .then((response) => {
          setTasksData(response.data.filter((task) => !task.completed));
          setCompletedTasksData(response.data.filter((task) => task.completed));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const link = APIRoutes.url + "/tasks/tag/" + currentTag.tagID;
      axios
        .get(link, { withCredentials: true })
        .then((response) => {
          setTasksData(response.data.filter((task) => !task.completed));
          setCompletedTasksData(response.data.filter((task) => task.completed));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const changeCompletedStatus = (completed, id) => {
    axios
      .put(
        APIRoutes.url + "/tasks/completedStatus",
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
    const link = APIRoutes.url + "/tasks/" + id;
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

  const showCompletedTasks = () => {
    setShowCompleted(!showCompleted);
  };

  useEffect(() => {
    getTasks();
  }, [currentTag]);

  return (
    <div className="d-flex flex-column col-md-9 ms-sm-auto main-content h-100 py-4 px-5">
      <NewTask />
      <EditTask taskToEdit={taskToEdit} />
      <h3 className="fw-bold">
        {currentTag.tagID == -1 ? (
          <i className="bi bi-star-fill star-icon"></i>
        ) : (
          <i className="bi bi-layers-fill tag-icon"></i>
        )}
        {"   " + currentTag.title}
      </h3>
      <div className="d-flex flex-column py-2 mb-auto overflow-auto">
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
        <div
          onClick={(event) => showCompletedTasks()}
          className="show-btn fs-6 p-1 me-auto mt-2"
        >
          {showCompleted ? "Hide completed tasks" : "Show completed tasks"}
        </div>
        {showCompleted &&
          completedTasksData &&
          completedTasksData.map((task, key) => {
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
