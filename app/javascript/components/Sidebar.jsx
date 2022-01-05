import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Sidebar component</h2>
                <Link to="/">All</Link>
                <br />
                <Link to="/tag">Tag 1</Link>
            </div>
        );
    }
}

export default Sidebar;
