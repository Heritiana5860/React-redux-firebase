import { NavLink } from "react-router-dom";

export function SignedOutLinks(){
    return(
        <ul className="right">
            <li><NavLink to="/" className="a">Signup</NavLink></li>
            <li><NavLink to="/" className="a">Login </NavLink></li>
        </ul>
    );
}