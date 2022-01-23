import React, { useState } from "react";
import axios from "axios";

function NewTag(props) {
  const [tagTitle, setTagTitle] = useState("");

  const handleChange = (event) => {
    setTagTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:3000/tags",
        { title: tagTitle },
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
    <form onSubmit={handleSubmit} className="d-flex fs-6 p-1">
      <i className="bi bi-layers-fill tag-icon"></i>
      <div className="container">
        <input
          name="title"
          placeholder="Title"
          value={tagTitle}
          onChange={handleChange}
          required
          className="tag-input"
        ></input>
      </div>
      <button type="submit" className="btn-hover">
        <i className="bi bi-arrow-right-circle"></i>
      </button>
    </form>
  );
}

export default NewTag;
