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
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={taskData.title}
        onChange={handleChange}
        required
      ></input>
      <input
        name="description"
        placeholder="Description"
        value={taskData.description}
        onChange={handleChange}
      ></input>
      <input
        name="tagID"
        placeholder="tagID"
        value={taskData.tagID}
        onChange={handleChange}
        required
      ></input>
      <button type="submit">New task</button>
    </form>
  );
}

export default NewTask;
