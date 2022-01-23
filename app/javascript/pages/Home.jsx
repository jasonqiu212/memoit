import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NewTask from "../components/NewTask";

function Home(props) {
  return (
    <div className="text-white h-100">
      <Sidebar handleLogout={props.handleLogout} />
      <Outlet />
    </div>
  );
}

export default Home;
