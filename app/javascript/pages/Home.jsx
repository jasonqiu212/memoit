import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AllTasks from "../components/AllTasks";
import TagTasks from "../components/TagTasks";

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Sidebar />
                <h1>Home page</h1>
                <Routes>
                    <Route path="all" element={<AllTasks />} />
                    <Route path="tag" element={<TagTasks />} />
                </Routes>
            </div>
        );
    }
}

export default Home;
