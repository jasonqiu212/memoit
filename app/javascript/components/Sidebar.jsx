import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewTag from "./NewTag";

function Sidebar(props) {
  const [tagsData, setTagsData] = useState("");

  const getTags = () => {
    axios
      .get("http://localhost:3000/tags", { withCredentials: true })
      .then((response) => {
        setTagsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTags();
  }, []);

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  };

  const handleTagChange = (event) => {};

  return (
    <div className="d-flex flex-column sidebar col-md-3 p-4">
      <h2 className="fw-bold">memoit</h2>
      <Link to="/" className="d-flex flex-row fs-6 fw-bold nav-link p-1 my-4">
        <i className="bi bi-star-fill star-icon"></i>
        <div className="container">
          <p className="my-0">All</p>
        </div>
      </Link>
      {tagsData &&
        tagsData.map((tag, key) => {
          return (
            <Link
              to="/"
              key={key}
              className="d-flex flex-row fs-6 fw-bold p-1 nav-link"
            >
              <i className="bi bi-layers-fill tag-icon"></i>
              <div className="container">
                <p className="my-0">{tag.title}</p>
              </div>
            </Link>
          );
        })}
      <br />
      <NewTag />
      <button onClick={() => handleLogoutClick()}>Log out</button>
    </div>
  );
}

export default Sidebar;
