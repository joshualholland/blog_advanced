import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/authors';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className="nav-link mr-sm-0 text-white" to="/logout">Logout</Link>;
    } else {
        return <Link className="nav-link mr-sm-0 text-white" to="/login">Login</Link>;
    }
};

export default AuthButton;