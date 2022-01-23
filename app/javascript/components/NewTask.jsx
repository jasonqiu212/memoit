import React, { useState } from "react";
import axios from "axios";

function NewTask(props) {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    tagID: -1,
  });

  const handleChange = (event) => {
    setTaskData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    const { title, description, tagID } = taskData;
    axios
      .post(
        "http://localhost:3000/tasks",
        {
          task: {
            title: title,
            description: description,
            tag_id: tagID,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="modal fade"
      id="newTask"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-main">
          <form onSubmit={handleSubmit}>
            <div className="modal-body d-flex flex-column">
              <input
                name="title"
                placeholder="Task title"
                className="task-input py-2 my-2"
                value={taskData.title}
                onChange={handleChange}
                required
              ></input>
              <input
                name="tagID"
                placeholder="tagID"
                className="task-input py-2 my-2"
                value={taskData.tagID}
                onChange={handleChange}
                required
              ></input>
              <textarea
                name="description"
                placeholder="Note"
                className="task-input py-2 my-2"
                value={taskData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
