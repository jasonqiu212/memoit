import React, { useState } from "react";
import axios from "axios";
import APIRoutes from "../utilities/routes";

function NewTag(props) {
  // State to store user input for new tag
  const [tagTitle, setTagTitle] = useState("");

  // Updates state when user edits input
  const handleChange = (event) => {
    setTagTitle(event.target.value);
  };

  // Calls API to create new tag and hides input
  // and refreshes tags
  const handleSubmit = (event) => {
    axios
      .post(
        APIRoutes.url + "/tags",
        { title: tagTitle },
        { withCredentials: true }
      )
      .then((response) => {
        props.handleShowNewTagChange();
        props.getTags();
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
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
