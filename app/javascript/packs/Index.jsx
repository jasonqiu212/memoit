import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../assets/stylesheets/style.css";
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
