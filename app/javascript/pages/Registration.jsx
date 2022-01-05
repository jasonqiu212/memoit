import React from "react";

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        console.log("form submitted");
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>Sign Up Now!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Registration;
