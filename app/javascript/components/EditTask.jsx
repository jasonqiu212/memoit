import React, { useEffect, useState } from "react";
import axios from "axios";
import APIRoutes from "../utilities/routes";

function EditTask(props) {
  const [tagsData, setTagsData] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(props.taskToEdit);

  const getTagsData = () => {
    axios
      .get(APIRoutes.url + "/tags", { withCredentials: true })
      .then((response) => {
        setTagsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTagsData();
  }, []);

  useEffect(() => {
    setTaskToEdit(props.taskToEdit);
  }, [props.taskToEdit]);

  const handleChange = (event) => {
    setTaskToEdit((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
                {tagsData &&
                  tagsData.map((tag, key) => {
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
              <button type="submit" className="btn btn-primary">
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
