import React, { useEffect, useState } from "react";
import axios from "axios";
import APIRoutes from "../utilities/routes";

function EditTask(props) {
  // State to store user inputs when editing task
  const [taskToEdit, setTaskToEdit] = useState(props.taskToEdit);

  // Update state to original task details when user has
  // selected a task to edit (or updates when there's
  // a change to props.taskToEdit)
  useEffect(() => {
    setTaskToEdit(props.taskToEdit);
  }, [props.taskToEdit]);

  // Updates state when user edits inputs
  const handleChange = (event) => {
    setTaskToEdit((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Calls API to update task details
  const handleSubmit = (event) => {
    const { id, title, description, tagID } = taskToEdit;
    axios
      .put(
        APIRoutes.url + "/tasks",
        {
          task: {
            id: id,
            title: title,
            description: description,
            tag_id: tagID,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        props.getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <div
      className="modal fade"
      id="editTask"
      tabIndex="-1"
      aria-labelledby="editTaskModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-main">
          <form onSubmit={handleSubmit}>
            <div className="modal-body d-flex flex-column">
              <input
                name="title"
                placeholder="Task title"
                className="form-control task-input py-2 my-2"
                value={taskToEdit.title}
                onChange={handleChange}
                required
              ></input>
              <select
                name="tagID"
                className="form-control task-input py-2 my-2"
                value={taskToEdit.tagID}
                onChange={handleChange}
              >
                <option value={props.allID}>All</option>
                {props.tagsData &&
                  props.tagsData.map((tag, key) => {
                    return (
                      <option key={key} value={tag.id}>
                        {tag.title}
                      </option>
                    );
                  })}
              </select>
              <textarea
                name="description"
                placeholder="Note"
                className="form-control task-input py-2 my-2"
                value={taskToEdit.description}
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
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
