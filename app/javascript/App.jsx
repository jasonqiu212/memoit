import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AllTasks from "./components/AllTasks";
import TagTasks from "./components/TagTasks";
import Registration from "./pages/Registration";

function App() {
  let navigate = useNavigate();
  const [loggedInStatus, setLoggedInStatus] = useState("");
  const [user, setUser] = useState({});

  function handleLogin(data) {
    setLoggedInStatus("LOGGED_IN");
    setUser(data.user);
  }

  function handleLogout() {
    setLoggedInStatus("NOT_LOGGED_IN");
    setUser({});
  }

  function handleSuccessfulAuth(data) {
    handleLogin(data);
    navigate("/");
  }

  function checkLoginStatus() {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus !== "LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN");
          setUser(response.data.user);
        } else if (
          !response.data.logged_in &&
          loggedInStatus !== "NOT_LOGGED_IN"
        ) {
          setLoggedInStatus("NOT_LOGGED_IN");
          setUser({});
        }
      })
      .catch((error) => {
        console.log("Login status error", error);
      });
  }

  useEffect(() => {
    checkLoginStatus();
  });

  if (loggedInStatus === "") {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              loggedInStatus={loggedInStatus}
              handleSuccessfulAuth={handleSuccessfulAuth}
            />
          }
        />
        <Route
          path="/registration"
          element={
            <Registration
              loggedInStatus={loggedInStatus}
              handleSuccessfulAuth={handleSuccessfulAuth}
            />
          }
        />
        <Route
          path="/"
          element={
            loggedInStatus === "LOGGED_IN" ? (
              <Home
                loggedInStatus={loggedInStatus}
                handleLogout={handleLogout}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route path="/" element={<AllTasks />} />
          <Route path="tag" element={<TagTasks />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
