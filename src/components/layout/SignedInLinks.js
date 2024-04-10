import { NavLink } from "react-router-dom";

export function SignedInLinks(){
    return(
        <ul className="right">
            <li><NavLink to="/" className="a">New Project</NavLink></li>
            <li><NavLink to="/" className="a">Log Out </NavLink></li>
            <li><NavLink to="/" className="btn">NN</NavLink></li>
        </ul>
    );
}