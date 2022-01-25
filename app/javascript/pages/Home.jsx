import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";
import axios from "axios";
import APIRoutes from "../utilities/routes";

function Home(props) {
  // State to store user's tags
  const [tagsData, setTagsData] = useState("");
  // State to store current selected tag in sidebar
  const [currentTag, setCurrentTag] = useState({ tagID: -1, title: "All" });
  // State to store tag ID for 'All' tag. (Used in NewTask)
  const [allID, setAllID] = useState(-1);
  // State to store whether to show sidebar or not
  const [showSidebar, setShowSidebar] = useState(false);

  // Change current selected tag
  const filterTag = (tagID, tagTitle) => {
    setCurrentTag({ tagID: tagID, title: tagTitle });
  };

  // Make call to API to get tags
  const getTags = () => {
    axios
      .get(APIRoutes.url + "/tags", { withCredentials: true })
      .then((response) => {
        setTagsData(response.data.filter((tag) => tag.title !== "All"));
        setAllID(response.data.filter((tag) => tag.title == "All")[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Calls getTags() at the start
  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="text-white h-100">
      <Sidebar
        handleLogout={props.handleLogout}
        filterTag={filterTag}
        tagsData={tagsData}
        getTags={getTags}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Tasks
        currentTag={currentTag}
        tagsData={tagsData}
        allID={allID}
        setShowSidebar={setShowSidebar}
      />
    </div>
  );
}

export default Home;
