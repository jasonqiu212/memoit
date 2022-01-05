import React from "react";
import Task from "./Task";

class AllTasks extends React.Component {
    render() {
        return (
            <div>
                <h2>All Tasks</h2>
                <Task />
            </div>
        );
    }
}

export default AllTasks;
