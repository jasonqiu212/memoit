import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login page!</h1>
                <Link to="/registration">Sign Up</Link>
            </div>
        );
    }
}

export default Login;
