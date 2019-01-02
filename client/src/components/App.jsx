import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import AllBlogs from './AllBlogs';
import PostBlog from './PostBlog';
import SingleBlog from './SingleBlog';
import EditBlog from './EditBlog';
import Contact from './Contact';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={AllBlogs} />
                        <Route exact path="/post" component={PostBlog} />
                        <Route exact path="/blog/:id" component={SingleBlog} />
                        <Route exact path="/edit/:id" component={EditBlog} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                    <Footer />
                </>
            </Router>
        )
    }
}

export default Navigation;