import React, { Component } from 'react';

class PostBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            title: ''
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        try {
            await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            this.props.history.replace('/')
        } catch (e) { console.log(e) }
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" onChange={(e) => { this.setState({ title: e.target.value }) }} />
                </div>
                <div class="form-group">
                    <label for="content">Content:</label>
                    <textarea class="form-control" rows="6" onChange={(e) => { this.setState({ content: e.target.value }) }}></textarea>
                </div>
                <button type='submit' className='btn btn-secondary btn-sm' onClick={(e) => this.handleSubmit(e)}>Post</button>
            </form>
        )
    }
}

export default PostBlog;