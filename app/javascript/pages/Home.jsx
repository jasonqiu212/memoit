import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import NewTask from "../components/NewTask";

function Home(props) {
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

  return (
    <div>
      <Sidebar />
      <button onClick={() => handleLogoutClick()}>Log out</button>
      <h1>Home page</h1>
      <NewTask />
      <Outlet />
    </div>
  );
}

export default Home;
