import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewTag from "./NewTag";

function Sidebar(props) {
  const [tagsData, setTagsData] = useState("");
  const [showNewTag, setShowNewTag] = useState(false);

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

  const handleTagDelete = (id) => {
    const link = "http://localhost:3000/tags/" + id;
    axios
      .delete(link, { withCredentials: true })
      .then((response) => {
        getTags();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTagChange = (event) => {};

  return (
    <div className="d-flex flex-column sidebar col-md-3 p-4">
      <div className="mb-auto overflow-auto">
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
                className="d-flex fs-6 fw-bold p-1 nav-link align-items-center"
              >
                <i className="bi bi-layers-fill tag-icon"></i>
                <div className="container">
                  <p className="my-0">{tag.title}</p>
                </div>
                <i
                  className="bi bi-x-circle ms-auto hide-delete"
                  onClick={(event) => handleTagDelete(tag.id)}
                ></i>
              </Link>
            );
          })}
        {showNewTag && <NewTag />}
      </div>
      <hr />
      <div className="d-flex" onClick={() => setShowNewTag(!showNewTag)}>
        <div className="d-flex me-auto btn-hover p-1">
          <i className="bi bi-plus-lg"></i>
          <p className="my-0">New tag</p>
        </div>
        <div onClick={() => handleLogoutClick()} className="btn-hover p-1">
          <i className="bi bi-box-arrow-left"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
