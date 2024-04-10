import React, { Component } from "react";
import '../../styles/SignIn.css';

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
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
                    <h2>Create new project</h2>
                    <div className="input">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                    </div>

                    <div className="input">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="content-area" id="content" value={this.state.content} onChange={this.handleChange}></textarea>
                    </div>

                    <div className="btn-login">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProject;