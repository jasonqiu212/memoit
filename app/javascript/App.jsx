import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AllTasks from "./components/AllTasks";
import TagTasks from "./components/TagTasks";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<AllTasks />} />
                    <Route path="tag" element={<TagTasks />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
