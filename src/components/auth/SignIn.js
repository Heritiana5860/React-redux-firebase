import React, { Component } from "react";
import '../../styles/SignIn.css';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="sign-in">
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    <div className="input">
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>

                    <div className="btn-login">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;