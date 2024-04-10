import { Link } from "react-router-dom";
import '../../styles/index.css';
import { SignedInLinks } from "./SignedInLinks";
import { SignedOutLinks } from "./SignedOutLinks";

export function Navbar() {
    return (
        <nav className="fixed">
            <div className="container">
                <li><Link to="/" className="mario-plant">MarioPlan</Link></li>
                <div className="link">
                    <SignedOutLinks />
                    <SignedInLinks />
                </div>
            </div>
        </nav>
    );
}