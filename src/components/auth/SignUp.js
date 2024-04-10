import React, { Component } from "react";
import '../../styles/SignIn.css';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
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
                    <h2>Sign Up</h2>
                    <div className="input">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                    </div>

                    <div className="input">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                    </div>

                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>

                    <div className="btn-login">
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;  