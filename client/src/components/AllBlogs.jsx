import React, { Component } from 'react';
import BlogCard from './BlogCard';
import * as baseServices from '../services/blogs';

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
        }
    }

    async componentDidMount() {
        try {
            let data = await baseServices.authoredblogs()
            let blogArray = data.map(key => {
                return {
                    id: key.id,
                    title: key.title,
                    content: key.content,
                    author: key.name
                }
            })
            this.setState({ blogs: blogArray })
        } catch (e) {
            console.log(e)
        }
    };

    returnCards() {
        return(
            this.state.blogs.map((blog) => {
                return <BlogCard blog={blog} key={blog.id} />
            })
        )
    };

    render() {
        return(
            <div className="container p-3">
                {this.returnCards()}
            </div>
        )
    };
}

export default Blogs;