import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  }

  render() {
    return (
      <div>
        <Sidebar />
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Log out</button>
        <h1>Home page</h1>
        <Outlet />
      </div>
    );
  }
}

export default Home;
