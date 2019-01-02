import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffd666' }}>
            <Link className="navbar-brand text-white" to="/">Joshua Holland's Blog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav ml-auto" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link mr-sm-4 text-white" to='/'>Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-sm-2 text-white" to='/contact'>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-sm-0 text-white" to='/post'>Compose</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



export default Navbar;