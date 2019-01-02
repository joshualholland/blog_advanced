import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';

class SingleBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: {},
            tags: []
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/blogs/${this.props.match.params.id}`);
            let blog = await res.json();

            let tagData = await fetch(`/api/queries/spBlogTags/${blog.id}`)
            let tags = await tagData.json();

            this.setState({ blog, tags })
        } catch (e) { console.log(e) }
    };

    async deleteBlog() {
        try {
            let res = await fetch(`/api/blogs/${this.props.match.params.id}`, {
                method: 'DELETE'
            });
            this.props.history.replace('/')
        } catch (e) { console.log(e) }
    };

    renderTags() {
        return (this.state.tags.map((tag) => {
            return <h5 className="d-inline m-1"><span class="badge" style={{ backgroundColor: 'black', color: '#ff66b8' }}>{tag.name}</span></h5>
        }))
    }

    render() {
        return (
            <div className="card col-lg-6 m-3 mx-auto">
                <div className="card-body">
                    <h5 className="card-title">{this.state.blog.title}</h5>
                    <p className="card-text">{this.state.blog.content}</p>
                    <div>
                        {this.renderTags()}
                    </div>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => this.deleteBlog()}>Delete</button>
                    <Link to={`/edit/${this.props.match.params.id}`} className="btn btn-sm btn-outline-secondary m-2">Edit Chirp</Link>
                    <Link to='/' className="btn btn-sm btn-outline-secondary">Home</Link>
                </div>
            </div>
        )
    }
};

export default SingleBlog;