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
    <form onSubmit={handleSubmit}>
      <input
        name="Title"
        placeholder="Title"
        value={tagTitle}
        onChange={handleChange}
        required
      ></input>
      <button type="submit">New tag</button>
    </form>
  );
}

export default NewTag;
