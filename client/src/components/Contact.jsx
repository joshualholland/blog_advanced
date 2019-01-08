import React, { Component } from 'react';
import { sendContactEmail } from '../services/contact';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleName(name) {
        this.setState({ name })
    }

    handleEmail(email) {
        this.setState({ email })
    }

    handleMessage(message) {
        this.setState({ message })
    }

    handleSubmit(e) {
        e.preventDefault()
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {
            this.props.history.push('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return(
            <form onSubmit={ (e) => this.handleSubmit(e) }>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="form-control" placeholder="Enter Name Here" onChange={ (e) => this.handleName(e.target.value) }/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="form-control" placeholder='Enter Email Here' onChange={ (e) => this.handleEmail(e.target.value) }/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea type="text" id="message" className="form-control" rows='4' onChange={ (e) => this.handleMessage(e.target.value) }/>
                </div>
                <button type="submit" className="btn btn-secondary">Contact Me!</button>
            </form>
        )
    }
}

export default Contact;