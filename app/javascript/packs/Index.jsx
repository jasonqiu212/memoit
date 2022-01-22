import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "../App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
