import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Home(props) {
  const [currentTag, setCurrentTag] = useState({ tagID: -1, title: "All" });
  const filterTag = (tagID, tagTitle) => {
    setCurrentTag({ tagID: tagID, title: tagTitle });
  };
  return (
    <div className="text-white h-100">
      <Sidebar handleLogout={props.handleLogout} filterTag={filterTag} />
      <Outlet context={currentTag} />
    </div>
  );
}

export default Home;
