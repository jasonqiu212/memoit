import React, { useState } from "react";
import axios from "axios";
import APIRoutes from "../utilities/routes";
import NewTag from "./NewTag";

function Sidebar(props) {
  // State to store whether to show input to create new tag
  const [showNewTag, setShowNewTag] = useState(false);

  // Call API to clear current session and redirects user to login page
  const handleLogoutClick = () => {
    axios
      .delete(APIRoutes.url + "/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  };

  // Call API to delete specified tag
  const handleTagDelete = (id) => {
    if (
      confirm(
        "Are you sure?\nPlease note that all tasks under this tag will be deleted as well."
      )
    ) {
      const link = APIRoutes.url + "/tags/" + id;
      axios
        .delete(link, { withCredentials: true })
        .then((response) => {
          props.getTags();
          props.filterTag(-1, "All");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Toggle state to show or hide input for creating new tag
  const handleShowNewTagChange = () => {
    setShowNewTag(!showNewTag);
  };

  return (
    <div className="d-flex flex-column sidebar col-md-3 p-4">
      <div className="mb-auto overflow-auto">
        <h2 className="fw-bold">memoit</h2>
        <div
          className="d-flex flex-row fs-6 fw-bold nav-link p-1 my-4"
          onClick={(event) => props.filterTag(-1, "All")}
        >
          <i className="bi bi-star-fill star-icon"></i>
          <div className="container">
            <p className="my-0">All</p>
          </div>
        </div>
        {props.tagsData &&
          props.tagsData.map((tag, key) => {
            return (
              <div
                key={key}
                className="d-flex fs-6 fw-bold p-1 nav-link align-items-center"
                onClick={(event) => props.filterTag(tag.id, tag.title)}
              >
                <i className="bi bi-layers-fill tag-icon"></i>
                <div className="container">
                  <p className="my-0">{tag.title}</p>
                </div>
                <i
                  className="bi bi-x-circle ms-auto hide-delete"
                  onClick={(event) => handleTagDelete(tag.id)}
                ></i>
              </div>
            );
          })}
        {showNewTag && (
          <NewTag
            getTags={props.getTags}
            handleShowNewTagChange={handleShowNewTagChange}
          />
        )}
      </div>
      <hr />
      <div className="d-flex" onClick={() => handleShowNewTagChange()}>
        <div className="d-flex me-auto btn-hover p-1">
          <i className="bi bi-plus-lg"></i>
          <p className="my-0">New tag</p>
        </div>
        <div onClick={() => handleLogoutClick()} className="btn-hover p-1">
          <i className="bi bi-box-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
