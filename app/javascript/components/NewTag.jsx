import React, { useState } from "react";
import axios from "axios";
import APIRoutes from "../utilities/APIRoutes";

function NewTag(props) {
  const [tagTitle, setTagTitle] = useState("");

  const handleChange = (event) => {
    setTagTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    axios
      .post(
        APIRoutes.url + "/tags",
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
    <form
      onSubmit={handleSubmit}
      className="d-flex fs-6 p-1 align-items-center"
    >
      <i className="bi bi-layers-fill tag-icon"></i>
      <input
        name="title"
        placeholder="New tag"
        className="form-control tag-input flex-grow-1 mx-2"
        value={tagTitle}
        onChange={handleChange}
        required
      ></input>
      <button type="submit" className="btn-hover">
        <i className="bi bi-arrow-right-circle"></i>
      </button>
    </form>
  );
}

export default NewTag;
