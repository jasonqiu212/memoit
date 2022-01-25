import axios from "axios";
import React, { useEffect, useState } from "react";
import APIRoutes from "../utilities/routes";
import Task from "./Task";
import NewTask from "./NewTask";
import EditTask from "./EditTask";

function Tasks(props) {
  // State to store what task the user chose to edit
  const [taskToEdit, setTaskToEdit] = useState({
    id: -1,
    title: "",
    description: "",
    tagID: -1,
  });
  // State to store user's uncompleted tasks (filtered by tag)
  const [tasksData, setTasksData] = useState("");
  // State to store user's completed tasks (filtered by tag)
  const [completedTasksData, setCompletedTasksData] = useState("");
  // State to show or hide completed tasks
  const [showCompleted, setShowCompleted] = useState(false);

  // Gets tasks from API based on currentTag
  // If currentTag is -1, get all tasks
  // Else, get tasks under corresponding tag ID
  const getTasks = () => {
    if (props.currentTag.tagID == -1) {
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
      const link = APIRoutes.url + "/tasks/tag/" + props.currentTag.tagID;
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

  // Calls API to update completed status of specified task
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

  // Calls API to delete specified task
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

  // Once user selects a task to edit (in Task.jsx),
  // set state to store the task details to pass into
  // EditTask
  const editTask = (task) => {
    setTaskToEdit({
      id: task.id,
      title: task.title,
      description: task.description,
      tagID: task.tag_id,
    });
  };

  // Toggle state on whether to show or hide completed tasks
  const showCompletedTasks = () => {
    setShowCompleted(!showCompleted);
  };

  // Calls getTasks() whenever currentTag changes
  useEffect(() => {
    getTasks();
  }, [props.currentTag]);

  return (
    <div className="d-flex flex-column col-md-9 ms-sm-auto main-content h-100 py-4 px-5">
      <NewTask
        tagsData={props.tagsData}
        allID={props.allID}
        getTasks={getTasks}
      />
      <EditTask
        taskToEdit={taskToEdit}
        tagsData={props.tagsData}
        allID={props.allID}
        getTasks={getTasks}
      />
      <div
        className="sidebar-btn fs-3 mb-2"
        onClick={() => props.setShowSidebar(true)}
      >
        <i className="bi bi-list"></i>
      </div>
      <h3 className="fw-bold">
        {props.currentTag.tagID == -1 ? (
          <i className="bi bi-star-fill star-icon"></i>
        ) : (
          <i className="bi bi-layers-fill tag-icon"></i>
        )}
        {"   " + props.currentTag.title}
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
