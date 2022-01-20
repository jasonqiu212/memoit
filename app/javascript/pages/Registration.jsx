import axios from "axios";
import React, { useState } from "react";

function Registration(props) {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleChange(event) {
    setRegistrationData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    const { email, password, password_confirmation } = registrationData;
    axios
      .post(
        "http://localhost:3000/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          props.handleSuccessfulAuth(response.data);
        } else {
          console.log("Registration not successful!");
        }
      })
      .catch((error) => {
        console.log("Registration error", error);
      });
    event.preventDefault();
  }

  return (
    <div>
      <h1>Status: {props.loggedInStatus}</h1>
      <h1>Sign Up Now!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registrationData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registrationData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={registrationData.password_confirmation}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Registration;
