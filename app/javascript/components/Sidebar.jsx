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

  return (
    <div>
      <h2>Sidebar component</h2>
      <Link to="/">All</Link>
      <br />
      {tagsData &&
        tagsData.map((tag, key) => {
          return (
            <div key={key}>
              <Link to="/tag">{tag.title}</Link>
              <br />
            </div>
          );
        })}
      <NewTag />
    </div>
  );
}

export default Sidebar;
