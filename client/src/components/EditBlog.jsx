import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/blogs/${this.props.match.params.id}`)
            let data = await res.json();
            this.setState({
                title: data.title,
                content: data.content
            })
        } catch (e) { console.log(e) }
    };

    async handleEdit(e) {
        e.preventDefault()
        try {
            let res = await fetch(`/api/blogs/${this.props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            this.props.history.replace(`/blog/${this.props.match.params.id}`)
        } catch (e) { console.log(e) }
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" placeholder={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} />
                </div>
                <div class="form-group">
                    <label for="content">Content:</label>
                    <textarea class="form-control" rows="6" placeholder={this.state.content} onChange={(e) => { this.setState({ content: e.target.value }) }}></textarea>
                </div>
                <button type='submit' className='btn btn-secondary btn-sm' onClick={(e) => this.handleEdit(e)}>Post</button>
            </form>
        )
    }
};

export default EditBlog;