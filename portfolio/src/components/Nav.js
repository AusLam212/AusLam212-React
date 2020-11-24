import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";



function Header() {
    const location = useLocation();

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }


    return(
        <header className="navbar navbar-expand-lg navbar-light">
            <span className="navbar-brand">Austin Lambert</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent" class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;