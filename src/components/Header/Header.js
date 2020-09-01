import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">

                <Link  className="navbar-brand" to="/">My Website</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" class="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/works" class="nav-link">Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" class="nav-link">Contact</Link>
                        </li>
                    </ul>
                
                </div>
            </div>

        </nav>
    );
};

export default Header;