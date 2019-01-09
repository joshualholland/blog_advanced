import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import AllBlogs from './AllBlogs';
import PostBlog from './PostBlog';
import SingleBlog from './SingleBlog';
import EditBlog from './EditBlog';
import Contact from './Contact';
import Donate from './Donate';

import Login from './auth/login';
import Logout from './auth/logout';
import PrivateRoute from './auth/privateRoute';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={AllBlogs} />
                        <PrivateRoute exact path="/post" component={PostBlog} />
                        <Route exact path="/blog/:id" component={SingleBlog} />
                        <PrivateRoute exact path="/edit/:id" component={EditBlog} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/donate" component={Donate} />
                    </Switch>
                    <Footer />
                </>
            </Router>
        )
    }
}

export default Navigation;