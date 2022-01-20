import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setLoginData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    const { email, password } = loginData;
    axios
      .post(
        "http://localhost:3000/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("Login error", error);
      });
    event.preventDefault();
  }

  return (
    <div>
      <h1>Status: {props.loggedInStatus}</h1>
      <h1>Log In!</h1>
      <Link to="/registration">Sign Up</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
