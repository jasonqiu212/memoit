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
    <section className="my-4 d-flex justify-content-center text-white">
      <div className="rounded container row col-lg-5 shadow d-flex justify-content-center text-center py-5">
        <h1 className="fw-bold">memoit</h1>
        <h3 className="fw-bolder mb-4">Welcome back!</h3>
        <form
          onSubmit={handleSubmit}
          className="row col-lg-10 justify-content-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control py-3 my-2"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control py-3 my-2"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn btn-success btn-block login-button col-lg-8 py-2 my-3 fw-bold fs-5"
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/registration" className="link">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
