import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../assets/stylesheets/application.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "../App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
});
