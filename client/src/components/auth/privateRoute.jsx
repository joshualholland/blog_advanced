import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../services/authors';

const PrivateRoute = (props) => {
    const Component = props.component;
    const propsToPass = Object.assign({}, props);
    delete propsToPass.component;

    return (
        <Route {...propsToPass} render={props => (
            isLoggedIn() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
        )} />
    );
};

export default PrivateRoute;