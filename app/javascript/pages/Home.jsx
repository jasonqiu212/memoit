import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Sidebar />
                <h1>Home page</h1>
                <Outlet />
            </div>
        );
    }
}

export default Home;
