import React, { Component } from "react";
import { Notifications } from "./Notifications";
import { ProjectList } from "../projects/ProjectList";
import '../../styles/Dashboard.css';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <div className="row">
                    <div className="div-contents">
                        <ProjectList />
                    </div>
                    <div className="div-notifications">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;