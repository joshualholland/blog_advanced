import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/authors';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-info" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn btn-info" to="/login">Login</Link>;
    }
};

export default AuthButton;