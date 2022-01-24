import React, { useEffect, useState } from "react";
import axios from "axios";

function NewTask(props) {
  const [tagsData, setTagsData] = useState("");
  const [taskData, setTaskData] = useState("");

  const getTagsData = () => {
    axios
      .get("http://localhost:3000/tags", { withCredentials: true })
      .then((response) => {
        setTagsData(response.data);
        const allID = response.data.filter((tag) => tag.title == "All")[0].id;
        setTaskData({
          title: "",
          description: "",
          tagID: allID,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTagsData();
  }, []);

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
  if (taskData == "") {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div
        className="modal fade"
        id="newTask"
        tabIndex="-1"
        aria-labelledby="newTaskModal"
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
                  value={taskData.title}
                  onChange={handleChange}
                  required
                ></input>
                <select
                  name="tagID"
                  className="form-control task-input py-2 my-2"
                  value={taskData.tagID}
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
}

export default NewTask;
